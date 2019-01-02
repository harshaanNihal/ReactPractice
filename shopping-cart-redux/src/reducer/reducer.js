
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
    case "UPDATECART": 
      return {
        ...state, 
        cart: state.cart.reduce((acc,v,i)=> {if(!(i===action.id))acc.push(v); return acc;},[])
      }
    case "UPDATEDATA": 
      return {
        ...state, 
        productList: action.updatevalue
      }
    default:
      return state;
  }
}