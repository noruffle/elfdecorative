import React from 'react'
import css from './Photo.module.css'

interface Photo {
  id: string;
  src: string;
  alt: string;
}

export default function Photo ({id, src, alt}: Photo) {
  return <img className={css.photo} id={id} src={src} alt={alt}/>
}
