let add = (state = 0, action) => {
  switch(action.type){
    case "SUM": 
      return (action.value1 + action.value2);
    case "SUBSTRACT":
      return (action.value1 - action.value2);
    case "MULTIPLICATION": 
      return (action.value1 * action.value2);
    case "DIVISION": 
      return (action.value1 / action.value2);
    default: 
      return state;
  }
}
export default add;