import { useState } from 'react'
import Navbar from '../components/layout/Navbar';

export default function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}