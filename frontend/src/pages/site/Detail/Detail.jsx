import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet-async'

const Detail = () => {
    const {id}=useParams()
    const [item,setItem]=useState([])
    const {addBasket}=useContext(MainContext)

    useEffect(() => {
          axios.get(`http://localhost:5000/api/shoppers/${id}`)
          .then((res) => {
            setItem(res.data);
            
    
          })
          
      }, []);
      
  
  return (
    <div className="container d-flex  mt-5 py-5 ">
    <Helmet>
      <title>
        Detail
      </title>
    </Helmet>
      <div className="col-6 d-flex justify-content-center  ">
        <img width="400px" height="400px" src={item.image} alt=""/>
      </div>
      <div className="col-6 d-flex flex-column justify-content-center ">
        <h3>{item.title}</h3>
        <h4>{item.price}$</h4>
        <p>{item.description}</p>
        <div>
          <button className="btn btn-success "
            onClick={()=>{
                addBasket(item._id)
                
            }}
          >Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Detail