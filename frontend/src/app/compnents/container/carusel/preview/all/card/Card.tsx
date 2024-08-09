"use client"
import React from 'react'
import css from './Card.module.css'
import Image from 'next/image';
import Skeleton from '@mui/joy/Skeleton';
import fetchData from '@/src/.utils/fetchData'


interface CardProps {
  id: string;
  src: string;
  alt: string;
}

export default function Card() {
  const [loading, setLoading] = React.useState(true);
  const [image, setImage] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      fetchData('api/images', setImage);
      setLoading(false)
    }, 0);
  }, [])

  return (
    <Skeleton loading={loading}>
      <div className={css.card}>
        <Image className={css.card_img} alt='' width={4096} height={2304} src={
          loading ? image : "/1.png"
        }/>
      </div>
    </Skeleton>
  )
}
