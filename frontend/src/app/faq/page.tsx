import { Metadata } from 'next';
import React from 'react'
import config from '@/config.json'

export const metadata: Metadata = {

  title: `FAQ | ${config.TITLE}`
}

export default function FAQ () {
  return (
    <h1>FAQ</h1>
  )
}