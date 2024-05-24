import React, { useContext } from 'react'
import MainContext from '../../../context/context';

const Wishlist = () => {

    const {deleteWishlist,wishlist}=useContext(MainContext)
  return (
    <div className='container d-flex justify-content-center pt-5'>
        <table class="table table-warning">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {wishlist.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={item.image} alt="" width="60px" height="60px" />
            </td>
            <td>{item.title}</td>
            <td>{item.count}</td>

            
            <td>
              <button
                onClick={() => {
                deleteWishlist(item._id);
                }}
                className="btn btn-danger "
              >
                delete
              </button>
            </td>
            
          </tr>
        ))}
      </tbody>
</table>
        </div>
  )
}

export default Wishlist