let add = (value1, value2) => {
  return {type: "SUM", value1, value2}
}
let sub = (value1, value2) => {
  return {type: "SUBSTRACT", value1, value2}
}
let mul = (value1, value2) => {
  return {type: "MULTIPLICATION", value1, value2}
}
let div = (value1, value2) => {
  return {type: "DIVISION", value1, value2}
}
export { add, sub, mul, div}