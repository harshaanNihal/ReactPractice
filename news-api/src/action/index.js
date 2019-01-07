export function fetchData(e){
  console.log(e.target.value)
  return {
    type: "FETCH_DATA",
    data: e.target.value
  }
}