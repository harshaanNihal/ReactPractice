let initialState = {
  totalBags : [],
  undoBag: []
}
export default function rootReducer (state = initialState, action) {
  switch(action.type){
    case "ADDDATA": 
      return {
      ...state,
      totalBags: [...state.totalBags, {
        value: action.data,
        done: false
      }]
    }
    case "CHANGECHECK": 
    state.totalBags[action.id].done = !state.totalBags[action.id].done;
    return {
        ...state,
        totalBags: [...state.totalBags]
      }
    case "DELETE":
      state.totalBags.splice(action.id, 1)
      return {
        ...state,
        totalBags: [...state.totalBags]
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
    default : 
    return state;
  }
}