import React from 'react'
import css from './Column.module.css'
import Photo from './photo/Photo'

interface ColumnProps {
  id: string;
  src: string[];
}

export default function Column({src}: ColumnProps) {
  return (
    <div className={css.column}>
      <Photo id={"photo_1"} src={src[0]} alt={"Material"}/>
      <Photo id={"photo_2"} src={src[1]} alt={"Material"}/>
      <Photo id={"photo_3"} src={src[2]} alt={"Material"}/>
      <Photo id={"photo_4"} src={src[3]} alt={"Material"}/>
    </div>
  )
}