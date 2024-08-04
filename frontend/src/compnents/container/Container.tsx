import React from 'react'
import css from './Container.module.css'
import Carusel from './carusel/Carusel'
import Profile from './profile/Profile'


export default function Container() {
  return (
    <div className={css.container}>
      <Carusel/>
      <Profile/>
    </div>
  )
}