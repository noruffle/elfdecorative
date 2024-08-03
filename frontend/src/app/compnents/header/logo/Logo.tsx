import Link from 'next/link'
import React from 'react'

import css from './Logo.module.css'

const Logo = () => {
  return (
    <div className={css.logo}>
      <Link className={css.link} href="/">Elf Decorative</Link>
      <Link className={css.link} href="/">Search</Link>
    </div>
  )
}

export default Logo