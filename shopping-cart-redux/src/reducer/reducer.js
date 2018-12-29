let initialState = {
  productList: [],
  productListCopy: [],
  cart : []
}
export default function shopping(state = initialState, action){
  switch(action.type){
    case "STORE": 
      return {
        ...state, 
        productList: action.value,
        productListCopy: action.value
      };
    case "HIGHTOLOW":
      return {
        ...state, 
        productList: [...state.productList].sort((a,b)=> b.price-a.price)
      }
    case "LOWTOHIGH": 
      return {
        ...state, 
        productList: [...state.productList].sort((a,b)=> a.price-b.price)
      }
    case "ADDCART":     
      return {
        ...state, 
        cart: [...state.cart,...[...state.productList].splice(action.id, 1)]
    }
    default:
      return state;
  }
}