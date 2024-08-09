'use client'
import React from 'react'
import css from './Photo.module.css'
import Image from 'next/image';
import Skeleton from '@mui/joy/Skeleton';


interface Photo {
  id: string;
  src: string;
  alt: string;
}

export default function Photo ({id, src, alt}: Photo) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [])

  return (
    <Skeleton loading={loading} sx={{margin:0,padding:0,objectFit:'cover', height:'450px',width:1, borderRadius:0}}>
      <img className={css.photo} id={id} src={loading ? src : src} alt={alt} loading='lazy'/>

    </Skeleton>
  )
}
