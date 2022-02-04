import axios from "axios";

export const SET_PAYMENTS = 'SET_PAYMENTS';
export const UPDATE_PAYMENT = 'UPDATE_PAYMENT';


export const getPayments = () => async (dispatch) => {

    const payments = await axios.post('/api/get');

    dispatch({ type: SET_PAYMENTS, payments });

}

export const togglePayment = ({ id, checked }) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT, checked: !checked, id })
    const updatedPayment = await axios.post('/api/update', {
        id,
        checked
    });

    console.log(updatedPayment)

}