import React from 'react'
import css from '../Bar.module.css'

interface DescriptionProps {
  description: string;
}

export default function Description ({description}: DescriptionProps) {
  return <div className={css.image_info}> {description} </div>
}