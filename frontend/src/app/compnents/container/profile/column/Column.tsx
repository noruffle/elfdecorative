import React from 'react'
import css from './Column.module.css'
import Photo from './photo/Photo'

export default function Column() {
  return (
    <div className={css.column}>
      <Photo/>
      <Photo/>
      <Photo/>
      <Photo/>
    </div>
  )
}