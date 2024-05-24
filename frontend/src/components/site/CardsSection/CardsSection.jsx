import React, { useContext, useState } from 'react'
import "./CardsSection.scss"
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'


const CardsSection = () => {
    
    const {data,addBasket,addWishlist}= useContext(MainContext)
    const [sort,setSort] = useState(null)
    const [inpValue,setInpValue]= useState("")
    
  return (
    <section className='cards__section'>
        <div className="container">
        <h2>Featured Products</h2>
        <div className='d-flex gap-4 mt-3 mb-3 cards__section__btns'>
                <input type="text" value={inpValue} onChange={(e)=>{
                    setInpValue(e.target.value)
                }} />
                <button onClick={()=>setSort({field:"title",asc:true})} className='btn btn-primary'>A-Z</button>
                <button onClick={()=>setSort({field:"title",asc:false})} className='btn btn-primary'>Z-A</button>
                <button onClick={()=>setSort({field:"price",asc:true})} className='btn btn-danger'>Low to High</button>
                <button onClick={()=>setSort({field:"price",asc:false})} className='btn btn-danger'>High to low</button>
                <button className='btn btn-success' onClick={()=>setSort(null)}>Default</button>
              </div>

        <div className='cards__section__crds d-flex gap-5 mt-4 flex-wrap'>
            

            {
                data.filter((x)=>x.title.toLowerCase().includes(inpValue.toLowerCase())).sort((a,b)=>{
                  if(!sort){
                    return 0
                  }
                  else if(sort.asc){
                    return (a[sort.field] > b[sort.field]) ? 1 : ((b[sort.field] > a[sort.field]) ? -1 : 0)
                  }
                  else if(!sort.asc){
                    return (a[sort.field] < b[sort.field]) ? 1 : ((b[sort.field] < a[sort.field]) ? -1 : 0)
                  }
                }).map((item,index)=>(
                        <div key={index} className='cards__section__crds__crd'>
            <img width={"346px"} height={"246px"} src={item.image} alt="" />
            <div className='cards__section__crds__crd__text d-flex flex-column align-items-center justify-content-center p-4'>
           <h5>{item.title}</h5>
           <p>{item.description}</p>
           <span>${item.price}</span>
           <div className='cards__section__crds__crd__text__btns'>
           <Link to={`/detail/${item._id}`}> <button className='btn btn-warning mt-3'>Detail</button></Link> 
            <Link><button className='btn btn-primary' onClick={()=>{
                addBasket(item._id)
            }}>Add to cart</button></Link>
            <Link><button onClick={()=>{
                addWishlist(item._id)
            }} className='btn btn-danger'>Add to Wishlist </button></Link>
           </div>
           
            </div>

 
           
         </div> 
                )

                )
            }
        
        </div>
        </div>
    </section>
  )
}

export default CardsSection