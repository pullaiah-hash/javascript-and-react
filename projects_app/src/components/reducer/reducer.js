
let initialState={
    price:300,
    picupSavings:-30,
    tax:0,
    estimatedTotal:0,
    promocode:""
}


let reducer=(state=initialState,action)=>{

    switch(action.type){
        case("ADD_PROMOCODE"):
        return{
            ...state,
            promocode:action.value

        }
break;
    }
  return state
}

export default reducer