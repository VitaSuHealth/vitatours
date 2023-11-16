import React from 'react'

export default function RessortSlider({children}: {children : React.ReactNode}) {

    return (
    <div id='slider' className='slider'>
        {children}
    </div>
    )
}