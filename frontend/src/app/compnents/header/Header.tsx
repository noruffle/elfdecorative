import React from 'react'
import Navigation from './nav/Navigation'
import Logo from './logo/Logo'

import css from './Header.module.css'

export default function Header() {
  return (
    <div className={css.header}>
      <Logo/>
      <Navigation/>
    </div>
  )
}

