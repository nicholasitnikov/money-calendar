import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css'

import { getPayments } from '../services/actions';
import Payment from '../components/Payment/Payment';

export default function Home() {

  const dispatch = useDispatch();

  const { payments } = useSelector(store => store);
 
  useEffect(() => {
    dispatch(getPayments());
  }, [])

  const renderPayments = useMemo(() => {
    return payments.map((el, index) => {
      return <Payment key={index} {...el} />
    })
  }, [payments])

  const calculateTotal = useMemo(() => {
    return payments.reduce((res, current) => {
      return res + (current.checked ? current.amount : 0);
    }, 0)
  }, [payments])

  return(<main className={styles.container}>
    <img className={styles.image} src='https://i.pinimg.com/736x/2d/3f/c6/2d3fc6a07aee05407f3887a4572df43a.jpg' alt='spb'/>
    <h1 className={styles.heading}>Всего: {calculateTotal} ₽</h1>
    {renderPayments}
  </main>);
}
