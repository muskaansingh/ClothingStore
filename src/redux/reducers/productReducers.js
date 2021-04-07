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

export const productReducers = (state=initialState, {type,payload}) => {
    switch(type){
        case actionTypes.SET_PRODUCT: return {
            ...state,
            products:payload
        }
        default: return state   
    }
}

export const selectedProductDetails = (state={}, {type,payload}) => {
    switch(type) {
        case actionTypes.SELECTED_PRODUCT: return {
            ...state,
            ...payload
        };
        case actionTypes.REMOVE_SELECTED_PRODUCT: return { };
        default: return state;
    }
}
