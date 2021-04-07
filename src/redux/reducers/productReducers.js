import { actionTypes } from "../types/actionTypes"

const initialState = {
    products:[
        // {
        //     id:1,
        //     title: "Summer Collection",
        //     price: "$456"
        // }
    ]
}

const productReducers = (state=initialState, {type,payload}) => {
    switch(type){
        case actionTypes.SET_PRODUCT: return {
            ...state,
            products:payload
        }
        default: return state   
    }
}

export default productReducers;