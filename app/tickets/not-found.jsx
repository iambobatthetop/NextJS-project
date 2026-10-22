import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <main className="text-center">
        <h2 className= "text-3xl"> We hit a Brick wall</h2>
        <p> We could not find the ticket you are looking for</p>
       
        <p>Go Back to the <Link href = "/tickets" > Tickets </Link></p>
        
    </main>
  )
}
