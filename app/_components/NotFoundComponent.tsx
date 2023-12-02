import React from 'react'

export default function NotFoundComponent({message}: {message: string}) {
  return (
    <div className='not-found-wrapper'>
        <h2>{message}</h2>
    </div>
  )
}
