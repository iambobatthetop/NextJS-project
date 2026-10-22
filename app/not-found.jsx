import React from 'react'
import Link from 'next/link'

export default function Notfound() {
  return (
    <main className="text-center">
        <h2 className= "text-3xl"> There was a problem </h2>
        <p> We could not find the page you are looking for</p>
       
        <p>Go Back to the <Link href = "/" > Dashboard </Link></p>
        
    </main>
  )
}
