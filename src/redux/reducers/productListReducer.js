import * as actionTypes from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function productsListReducer(
  state = initialState.products,
  action
) {
  // console.log(action);
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      // console.log(action.payload);
      return action.payload;
    default:
      // console.log(state);
      return state;
  }
}
