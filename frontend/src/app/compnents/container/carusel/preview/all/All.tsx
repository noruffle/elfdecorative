import React from 'react'
import css from './All.module.css'
import Card from './card/Card'
import Info from './info/Info'

export default function All() {

  const color: string[] = [
    
  ];

  return (
    <div className={css.all}>
      <Info/>
      <Card/>
    </div>
  )
}
