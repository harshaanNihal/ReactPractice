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
export function updateProductList(updatevalue){
  return {
    type: "UPDATEDATA",updatevalue
  }
}
export function addCart(id){
  return {
    type: "ADDCART", id
  }
}
export function updateCart(id){
  return {
    type: "UPDATECART", id
  }
}