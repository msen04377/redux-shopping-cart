import * as actionTypes from './shopping.types'

const INITIALSTATE = {
    Products: [],
    cart: [],
    currentItem: null
}


const shopReducer = (state = INITIALSTATE, action) => {
    switch (action.types) {
        case actionTypes.ADD_TO_CART:
            return {};
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state
    }
}

export default shopReducer;