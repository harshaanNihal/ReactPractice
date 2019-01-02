const increment = () => {
  return {type: "INCREMENT"}
};
const decrement = () => {
  return {type: "DECREMENT"}
};
 let input = (value) => {
  return {type: "INPUT", value }
 };
 let deleteItem = (index) => {
  return {type: "DELETE", index }
 };

export { increment, decrement, input, deleteItem};