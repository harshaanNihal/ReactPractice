let initialState = {
  number : 0,
  arr : []
}
export function Calculation (state = initialState , action) {
  switch(action.type){
    case "INCREMENT": 
      return {
        ...state, 
        number : state.number + 1
      }
    case "DECREMENT": 
      return {
        ...state, 
        number : state.number - 1
      }
    case "INPUT":
      return {
        ...state , 
        arr: [...state.arr, action.value]
      }
    case "DELETE":
      return {
        ...state , 
        arr: 
          state.arr.reduce((acc,value,index) => {
            if(!(index === action.index)) acc.push(value);
            return acc;
          }, [])
      }
    default : 
      return state;
  }
} 



