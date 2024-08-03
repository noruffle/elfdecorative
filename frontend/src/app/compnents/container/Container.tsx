import React from 'react'
import Section from './section/Section'
import css from './Container.module.css'
import Sub from '../sub/Sub'

export default function Container() {
  return (
    <div className={css.container}>
      <Section/>
      <Sub/>
    </div>
  )
}