import React from 'react'
import css from './Card.module.css'
import Info from './info/Info'

interface CardProps {
  style: string
}

export default function Card({style}: CardProps) {
  return (
    <div className={css.card} style={{backgroundColor: style}}>
      <Info/>
    </div>
  )
}
