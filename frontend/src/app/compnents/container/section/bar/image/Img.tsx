import React from 'react'
import css from './Img.module.css'

interface PictureProps {
  src: string;
  alt: string;
}

export default function Picture ({src, alt}: PictureProps) {
  return <img className={css.img} src={src} alt={alt}/>
}


