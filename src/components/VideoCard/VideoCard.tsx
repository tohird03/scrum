import Image from 'next/image'
import React from 'react'

type Props = {
  img: string,
  title: string,
  desc: string,
}

export default function VideoCard({img, title, desc}: Props) {
  return (
    <div>
      <Image
        src={img}
        width={500}
        height={400}
        alt={title}
      />

      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}
