import { actionTypes } from "../types/actionTypes"

const initialState = {
    products:[
        {
            id:1,
            title: "Summer Collection"
        }
    ]
}

const productReducers = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.SET_PRODUCT: return state;
        default: return state   
    }
}

export default productReducers;