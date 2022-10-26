import React from 'react'
const Balance = ({children}) => {

  return (
    <div>
        <button className='btn btn-primary'>Your balance is : {children}</button>
    </div>
  )
}

export default Balance
