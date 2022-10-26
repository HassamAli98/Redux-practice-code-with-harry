const reducer = (state = 100 , action) => {
  if(action.type === "DEPOSIT"){
    return state + action.payload;
  }

  else if(action.type === "WITHDRAW"){
    return state - action.payload;
  }

  else {
    return state;
  }
}
export default reducer