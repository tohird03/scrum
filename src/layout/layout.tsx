import classNames from 'classnames'
import styles from './layout.scss'
import { ReactNode } from 'react'
import Header from './header/header'
import Sidebar from './sidebar/sidebar'

const cx = classNames.bind(styles)
type Props = {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div className={cx('layout')}>
      <Header />
      <div className={cx('layout__content')}>
        <Sidebar />
        <div className={cx('layout__content-wrapper')}>
          {children}
        </div>
      </div>
    </div>
  )
}
