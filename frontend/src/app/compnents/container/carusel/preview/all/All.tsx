import React from 'react'
import css from './All.module.css'
import Card from './card/Card'

export default function All() {

  const color: string[] = [
    "black",
    "white",
    "red",
    "yellow"
  ];

  return (
    <div className={css.all}>
      <Card style={color[0]}/>
    </div>
  )
}
