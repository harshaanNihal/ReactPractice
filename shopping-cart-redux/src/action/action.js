export function addData(value){
  return {
    type: "STORE", value
  }
} 
export function shortHighToLow(){
  return {
    type: "HIGHTOLOW"
  }
}
export function shortLowToHigh(){
  return {
    type: "LOWTOHIGH"
  }
}
export function addCart(id){
  return {
    type: "ADDCART", id
  }
}