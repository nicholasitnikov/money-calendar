import { useDispatch } from "react-redux";
import { togglePayment } from "../../services/actions";
import styles from './Payment.module.css';

import { motion } from "framer-motion";

const Payment = (props) => {

    const dispatch = useDispatch();

    const paymentClickHandler = () => {
        dispatch(togglePayment(props));
      }

    return(
        <motion.span 
            onClick={paymentClickHandler} 
            className={styles.payment}
            initial={{
                backgroundColor: props.checked ? '#000000' : '#ffffff',  
                paddingLeft: props.checked ? '15px' : '0',
                color: props.checked ? '#ffffff' : '#000000',
                backgroundPosition: props.checked ? '4px 5px' : '-10px 5px'
            }}
            animate={{
                backgroundColor: props.checked ? '#000000' : '#ffffff',  
                paddingLeft: props.checked ? '15px' : '0',
                color: props.checked ? '#ffffff' : '#000000',
                backgroundPosition: props.checked ? '4px 5px' : '4px -10px'
            }}
            transition={{
                type: 'spring',
                duration: .5
            }}
            >{props.amount}
        </motion.span>
    )
    
}

export default Payment;