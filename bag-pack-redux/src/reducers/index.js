let initialState = {
  totalBags : [],
  history:[],
  undoBag: [],
  searchUP:[],
  searchP:[]
}
export default function rootReducer (state = initialState, action) {
  switch(action.type){
    case "ADDDATA": 
    state.totalBags.push(
      {
        value: action.data,
        done: false
      }
    )
      return {
      ...state,
      totalBags: [...state.totalBags],
      history: [...state.history,state.totalBags]
    }
    case "CHANGECHECK": 
    state.totalBags[action.id].done = !state.totalBags[action.id].done;
    return {
        ...state,
        totalBags: [...state.totalBags],
        history: [...state.history,state.totalBags]
      }
    case "DELETE":
      state.totalBags.splice(action.id, 1)
      return {
        ...state,
        totalBags: [...state.totalBags],
        history: [...state.history,state.totalBags]
      }
    case "UNDO": 
      let undoItem = state.totalBags.splice(state.totalBags.length - 1, 1);
      console.log(undoItem)
      return {
        ...state,
        totalBags: [...state.totalBags],
        undoBag: [...state.undoBag, ...undoItem]
      }
    case "REDO":
      let redoItem = state.undoBag.splice(state.undoBag.length - 1, 1)
      return {
        ...state,
        totalBags: [...state.totalBags, ...redoItem],
        undoBag: [...state.undoBag]
      }
    case "SEARCH_UNPACKED":
      let searchvalue = state.totalBags.reduce((acc,v)=>{
        if(!v.done){
          if(v.value.includes(action.value)){acc.push(v)}
        }
        return acc;
      },[])
      return {
        ...state, 
        searchUP: action.value ? searchvalue : []
      }
      case "SEARCH_PACKED":
      let searchpackedvalue = state.totalBags.reduce((acc,v)=>{
        if(v.done){
          if(v.value.includes(action.value)){acc.push(v)}
        } 
        return acc;
      },[])
      return {
        ...state, 
        searchP: action.value ? searchpackedvalue : []
      }
    default : 
    return state;
  }
}