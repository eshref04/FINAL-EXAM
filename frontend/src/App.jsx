import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { useState, useEffect } from "react";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
    const [data, setData] = useState([]);
    const [basket, setBasket] = useState( localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
    const [wishlist, setWishlist] = useState( localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []);
    const router = createBrowserRouter(ROUTES);
    const contextData = {
      data, setData, addBasket, deleteBasket, basket, setBasket,wishlist,setWishlist,addWishlist,deleteWishlist
    }
    
  useEffect(() => {
    axios.get("http://localhost:5000/api/shoppers").then((res) => {
      setData([...res.data]);
      
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [basket,wishlist]);

  function deleteBasket(id) {
    let target = basket.find((x) => x._id == id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x._id != id)]);
    }
  }

  function addBasket(id) {
    let findBasketItem = basket.find((x) => x._id == id);

    if (!findBasketItem) {
      let target = data.find((x) => x._id == id);
    
      let newBasketItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newBasketItem]);
    } else {
      findBasketItem.count += 1;
      findBasketItem.totalPrice += findBasketItem.price;
      setBasket([...basket]);
    }
  }

  function addWishlist(id) {
    let findWishlistItem = wishlist.find((x) => x._id == id);

    if (!findWishlistItem) {
      let target = data.find((x) => x._id == id);
    
      let newWishlistItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setWishlist([...wishlist, newWishlistItem]);
    } 
    else if(target.count > 1){
     target.count -=1 
     setWishlist([...wishlist])
    }
    else {
      
      setWishlist([...wishlist.filter((x)=>x._id !=id)]);
    }
  }

  function deleteWishlist(id) {
    let target = basket.find((x) => x._id == id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setWishlist([...wishlist]);
    } else {
      setWishlist([...wishlist.filter((x) => x._id != id)]);
    }
  }



return (
        <>
        <MainContext.Provider value={contextData}>
                <HelmetProvider>
                    <RouterProvider router={router} />
                </HelmetProvider>
            </MainContext.Provider>
        </>
    );
}

export default App;
