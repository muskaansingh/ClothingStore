import { actionTypes } from "../types/actionTypes"

export const setProducts = (products) => {
    return {
        type:actionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return{
        type:actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}


export const removeselectedProducts = () => {
    return{
        type:actionTypes.REMOVE_SELECTED_PRODUCT
    }
}