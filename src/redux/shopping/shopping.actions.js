import * as actionTypes from './shopping.types'

export const addToCart = (itemId) =>{
    return{
        type: actionTypes.addToCart,
        payload:{
            id:itemId
        }
    }
}

export const removeFromCart = (itemId) =>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id:itemId
        }
    }
}

export const adjustQuantity = (itemId,value) =>{
    return{
        type: actionTypes.ADJUST_QTY,
        payload:{
            id:itemId,
            qty:value
        }
    }
}

export const loadCurrentItem = (item) =>{
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}

