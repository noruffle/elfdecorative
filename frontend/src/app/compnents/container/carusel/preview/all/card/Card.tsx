import React from 'react'
import css from './Card.module.css'
import Image from 'next/image';


interface CardProps {
  id: string;
  src: string;
  alt: string;
}

export default function Card() {
  return (
    <div className={css.card}>
      <Image className={css.card_img} alt='' width={4096} height={2304} src="/1.png"/>
    </div>
  )
}
