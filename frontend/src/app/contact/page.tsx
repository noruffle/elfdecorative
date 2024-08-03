import { Metadata } from 'next';
import React from 'react'
import config from '@/config.json'


export const metadata: Metadata = {
  title: `Contact | ${config.TITLE}`
}

export default function Contact () {
  return (
    <h1>Contact</h1>
  )
}
