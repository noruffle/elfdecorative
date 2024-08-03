import { Metadata } from 'next';
import React from 'react'
import config from '@/config.json'

export const metadata: Metadata = {
  title: `Order | ${config.TITLE}`
}

export default function Portfolio () {
  return (
    <h1>Order</h1>
  )
}
