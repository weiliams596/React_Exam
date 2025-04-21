import React, { useContext } from "react";
import CartContext from "./CartContext";

export default function BuyCardList() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <h1>Cart List:</h1>
      {state.carts.map((item, index) => {
        return (
          <div className="cart-item" key={index}>
            <p>
              {item.data.name} - {item.data.price}KZT
            </p>
            <div className="cart-pluse-or-minus">
              <button onClick={() => {dispatch({type:'UPDATE_ITEM',payload:{data:item.data,count:item.count-1}})}}>-</button>
              <p>{item.count}</p>
              <button onClick={() => {dispatch({type:'UPDATE_ITEM',payload:{data:item.data,count:item.count+1}})}}>+</button>
            </div>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: item });
              }}>
              Remove
            </button>
          </div>
        );
      })}
      <p>Total price:{state.carts.reduce( (acc, item) => acc + (item.count * item.data.price), 0)}KZT</p>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR_CART" });
        }}>
        Clean cart list
      </button>
    </div>
  );
}
