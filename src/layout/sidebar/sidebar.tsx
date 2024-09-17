import classNames from "classnames"
import styles from './sidebar.scss'
import Link from "next/link"

const cx = classNames.bind(styles)

export default function Sidebar() {
  return (
    <div className={cx('sidebar')}>
      <nav className={cx('navbar')}>
        <ul className={cx('navbar__list')}>
          <li className={cx('navbar__item')}>
            <Link href='#'>
              Sidebar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
