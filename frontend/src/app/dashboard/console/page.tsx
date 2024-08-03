import { Metadata } from 'next'
import React from 'react'

const title: string = 'Console';

const Console = () => {
  return (
    <div>{title}</div>
  )
}

export const metadata: Metadata = {
  title
};

export default Console