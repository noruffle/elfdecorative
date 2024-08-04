import { Metadata } from 'next';
import React from 'react'
import Container from "./compnents/container/Container";
import config from '@/src/config.json'


export const metadata: Metadata = {
  title: config.TITLE
}

export default function Home () {
  return (
    <Container/>
  )
}
