import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Dashboard'
}

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/console">Console</Link>
      <Link href="/">Home</Link>
    </>
  )
}

export default Dashboard