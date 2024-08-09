'use client'
import React from 'react'
import fetchData from '@/src/.utils/fetchData'

export default function API () {

  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetchData('api', setMessage);
  }, []);

  return (
    <h1>{message ? message : 'Loading...'}</h1>
  )
}