import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';

const Shop = () => {
  const dispatch = useDispatch() 
  const amount = useSelector(state=>state.amount);
  const action = bindActionCreators(actionCreators,dispatch)
  return (
    <div className="container d-flex mt-3">
      <button disabled={amount === 0} className='btn btn-primary' onClick={()=>{action.withdrawMoney(100)}}>-</button>
      <p className='mx-2'>Deposit/Withdraw</p>
      <button  className='btn btn-primary' onClick={()=>{action.depositMoney(100)}}>+</button>
    </div>

    
    // multiple ways
    // <div className="container d-flex mt-3">
    //   <button disabled={amount == 0} className='btn btn-primary' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    //   <p className='mx-2'>Deposit/Withdraw</p>
    //   <button  className='btn btn-primary' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    // </div>
  )
}

export default Shop
