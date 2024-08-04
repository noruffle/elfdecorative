import React from 'react'
import css from './Profile.module.css'
import Column from './column/Column'


export default function Profile() {
  return (
    <div className={css.profile}>
      <div className={css.wrap}>
        <Column/>
        <Column/>
        <Column/>
      </div>
    </div>
  )
}