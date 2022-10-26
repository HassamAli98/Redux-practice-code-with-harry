import React from 'react'
import { useSelector } from 'react-redux'
import Balance from './Balance'

const NavBar = () => {
  const amount = useSelector(state=>state.amount)
  return (
    <div>
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">Bank Application</a>
  <Balance>{amount}</Balance>
</nav>
    </div>
  )
}

export default NavBar
