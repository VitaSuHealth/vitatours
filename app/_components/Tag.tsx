import Link from 'next/link'
import React from 'react'
import District from '../_types/District'

function Tag({district, dark}: {district: District, dark: boolean}) {
  return (
    <Link href ={`?${new URLSearchParams({district: district.slug})}`} className={`tag-body ${dark && 'tag-body-dark'}`}
    >
        {district.naam}
    </Link>
  )
}

export default Tag