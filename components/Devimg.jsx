import Image from 'next/image'
import React from 'react'

function Devimg({containerStyle, imgSrc}) {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  )
}

export default Devimg