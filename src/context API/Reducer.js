/* eslint-disable no-unused-vars */
import { auth } from '../firebase';

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  //console.log(state);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'Remove_From_Basket':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn('cannot remove product', action.id);
      }
      return { ...state, basket: newBasket };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'EMPTY_BASKET': {
      return {
        ...state,
        basket: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
