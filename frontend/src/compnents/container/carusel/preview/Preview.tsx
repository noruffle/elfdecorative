import React from 'react'
import css from './Preview.module.css'
import All from './all/All'

export default function Preview() {
  return (
    <div className={css.preview}>
      <All/>
    </div>
  )
}
