import React from 'react'
import css from './Carusel.module.css'
import Preview from './preview/Preview'

export default function Carusel() {
  return (
    <div className={css.carusel}>
      <Preview/>
    </div>
  )
}
