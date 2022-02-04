import { combineReducers } from "redux";
import { SET_PAYMENTS, UPDATE_PAYMENT } from "../actions";


const paymentsReducer = (state = [], action) => {

    switch(action.type) {
        case SET_PAYMENTS: {
            return action.payments.data.sort((a,b) => a.id - b.id);
        }
        case UPDATE_PAYMENT: {
            return state.map(el => {
                if(el.id === action.id) {
                    el.checked = action.checked
                }
                return el;
            })
        }
        
        default: {
            return state;
        }
    }

}

export const rootReducer = combineReducers({
    payments: paymentsReducer
})