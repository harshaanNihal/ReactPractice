export function addItem(data){
  return {
    type: "ADDDATA", data
    }
}
export function handleChange(id){
  return {
    type: "CHANGECHECK", id
    }
}
export function handleDelete(id){
  return {
    type: "DELETE", id
    }
}
export function undo(){
  return {
    type: "UNDO"
  }
}
export function redo(){
  return {
    type: "REDO"
  }
}