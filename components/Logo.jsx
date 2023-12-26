import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/'>
      <Image src='/logo (5).png' width={54} height={54} priority alt="">

      </Image>
    </Link>
  )
}

export default Logo