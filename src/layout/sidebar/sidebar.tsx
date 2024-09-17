'use client'

import Image from "next/image"
import Link from "next/link"
import classNames from "classnames"
import { IMenuUi, SidebarMenu } from "@/constants/menu"
import styles from './sidebar.scss'
import { usePathname } from "next/navigation"

const cx = classNames.bind(styles)

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <div className={cx('sidebar')}>
      <nav className={cx('navbar')}>
        <ul className={cx('navbar__list')}>
          {SidebarMenu?.map((menu: IMenuUi) => (
            <li className={cx('navbar__item')}>
              <Link href='#' className={cx(`navbar__link ${pathname === menu?.path ? 'active' : ''}`)}>
                <Image
                  src={menu?.icon}
                  alt={menu?.title}
                  width={24}
                  height={24}
                />
                {menu?.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
