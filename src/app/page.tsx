"use client"
import { useRouter} from "next/navigation";
import Link from 'next/link'
import React from 'react'

function Home() {
  const route = useRouter()
  return (
    <>
      <h1>Assignment 3 of Next.js</h1>
      <span>(Mentor: Sir Asharib and Sir Naeem)</span>
      <h2>This is Home Page.</h2>
      <hr />

      {/* Linking */}
      <h3>Linking</h3>
      <ul>
        <li><Link href= "/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <hr />

      {/* Navigation */}
      <h3>Navigation</h3>

      {/* about button */}
      <button onClick={() => route.push("/about")}>About</button> <br /> <br />
      {/* contact button */}

      <button onClick={() => route.push("/contact")}>Contact</button>
    </>
  )
}

export default Home
