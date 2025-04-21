import React, { useReducer, useState } from "react";

import CartContext from "./Components/CartContext";
import ProductList from "./Components/ProductList";
import BuyCardList from "./Components/BuyCartList";

import "./Style/style.css";

const initialState = {
  carts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        carts: state.carts.filter((data) => data.data.id !== action.payload.data.id),
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        carts: state.carts.map((data) => {
          if (data.data.id === action.payload.data.id) {
            if(action.payload.count<1){
              return data;
            }
            return (data = action.payload);
          }
          return data;
        }),
      };
    case "CLEAR_CART":
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};

export default function Exam() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{ state, dispatch }}>
      <div className="exam10">
        <ProductList />
        {state.carts.length > 0 && <BuyCardList />}
      </div>
    </CartContext.Provider>
  );
}
