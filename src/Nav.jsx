import React from 'react'
import { NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to='Home'>Home</NavLink>
      <NavLink to='Produtos'> Produtos</NavLink>
      <NavLink to='Sobre'> Sobre</NavLink>
    </nav>
  )
}

export default Nav
