import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  productsList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_PRODUCT: {
      return {
        ...state,
        productsList: state.productsList.concat(action.payload.productData),
      };
    }
    case REMOVE_PRODUCT: {
      const newList = state.productsList.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        productsList: newList,
      };
    }
  }
};

export default cartReducer;
