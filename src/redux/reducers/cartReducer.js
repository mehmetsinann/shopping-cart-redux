import * as actionTypes from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );

      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign(addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

    case actionTypes.DECREASE_FROM_CART:
      const removedItem = state.find((c) => c.product.id === action.payload.id);
      if (removedItem && removedItem.quantity > 1) {
        var newState1 = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.id) {
            return Object.assign(removedItem, {
              quantity: removedItem.quantity - 1,
            });
          }
          return cartItem;
        });
        return newState1;
      }
      const newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return newState2;

    case actionTypes.REMOVE_FROM_CART:
      const newState3 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return newState3;

    default:
      return state;
  }
}
