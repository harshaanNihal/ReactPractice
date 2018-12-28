let initialState = {
  productList: [],
  productListCopy: []
}
export default function shopping(state = initialState, action){
  switch(action.type){
    case "STORE": 
      return {
        ...state, 
        productList: [...state.productList, action.value],
        productListCopy: [...state.productListCopy, action.value]
      }
  }
}