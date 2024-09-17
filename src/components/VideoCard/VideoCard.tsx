import Image from 'next/image'
import React from 'react'
import classnames from 'classnames/bind'
import styles from './video-card.scss'

const cx = classnames.bind(styles)

type Props = {
  img: string,
  title: string,
  desc: string,
}

export default function VideoCard({ img, title, desc }: Props) {
  return (
    <div className={cx("video-card__wrapper")}>
      <Image
        className={cx('video-card__img')}
        src={img}
        width={350}
        height={350}
        alt={title}
        loading='lazy'
      />

      <div>
        <h2 className={cx('video-card__title')}>{title}</h2>
        <p className={cx('video-card__desc')}>{desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium quo itaque. Ipsam harum officiis, temporibus facilis ducimus vel eos?</p>
      </div>
    </div>
  )
}
