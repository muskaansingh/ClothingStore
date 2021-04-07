import {combineReducers} from 'redux';
import {productReducers, selectedProductDetails} from './productReducers';

const reducers = combineReducers({
    allProducts:productReducers, 
    selectedProduct: selectedProductDetails   
})

export default reducers;