import React from 'react'
import Navigation from './nav/Navigation'

import css from './Header.module.css'

export default function Header() {
  return (
    <div className={css.header}>
      <Navigation/>
    </div>
  )
}

