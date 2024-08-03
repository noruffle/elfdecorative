import React from 'react'
import css from './Footer.module.css'

const Footer = () => {
  return (
    
    <div className={css.footer}>
      <p className={css.p}>
        Copyright © 2024 - present. 
        <a className={css.a} href="https://github.com/noruffle">Made by noruffle</a>
      </p>
    </div>
  )
}

export default Footer