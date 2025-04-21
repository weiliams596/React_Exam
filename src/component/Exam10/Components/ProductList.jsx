import React, { useContext } from 'react';
import CartContext from './CartContext';

import carData from '../Assets/CartInfo.json';


export default function ProductList() {
    const {dispatch} = useContext(CartContext);
  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {carData.products.map((item,index)=>{
            return (
                <div className="product-item" key={item.id}>
                    <p>{item.name} - {item.price}KZT</p>
                    <button onClick={(e)=>{dispatch({type:'ADD_ITEM',payload:{data:item,count:1}})}}>Add to cart</button>
                </div>
            );
        })}
      </div>
    </div>
  )
}
