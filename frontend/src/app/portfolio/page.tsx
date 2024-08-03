import { Metadata } from 'next';
import React from 'react'
import config from '@/config.json'

export const metadata: Metadata = {
  title: `Portfolio | ${config.TITLE}`
}

export default function Portfolio () {
  return (
    <h1>Port</h1>
  )
}
