import * as actionTypes from "./actionTypes";

export function addToCart(cartItem) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: cartItem,
  };
}

export function decreaseFromCart(product) {
  return {
    type: actionTypes.DECREASE_FROM_CART,
    payload: product,
  };
}

export function removeFromCart(product) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
}

export function removeAllFromCart(cart) {
  return {
    type: actionTypes.REMOVE_ALL_FROM_CART,
    payload: cart,
  };
}
