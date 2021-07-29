export const initialState = {
  cart: [],
  user: null,
  orders: null
};

export const getCartTotal = (cart) => cart?.reduce((amount,item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "Add_To_Cart":
      //
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "Remove_From_cart":
      //
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        cart: newCart,
      };
      case 'Set_User':
        return {
          ...state,
          user: action.user
        }
        case 'Empty_Cart': 
        return{
          ...state, 
          cart: []
        }
    default:
      return state;
  }
};

export default reducer;
