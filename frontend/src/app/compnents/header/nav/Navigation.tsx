import React from 'react'
import css from './Navigation.module.css'

export default function Navigation() {
  return (
    <div className={css.nav}>
      <a className={css.link} href="/portfolio">Portfolio</a>
      <a className={css.link} href="/contact">Contact</a>
      <a className={css.link} href="/faq">FAQ</a>
      <a className={css.link} href="/order">Order</a>
      <a className={css.link} href="/order">Language</a>
    </div>
  )
}