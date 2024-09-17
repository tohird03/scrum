import classNames from 'classnames'
import styles from './header.scss'
import Image from 'next/image'
import { languages } from '@/constants/language'

import SettingsImg from '@/public/images/settings.png'

const cx = classNames.bind(styles)

export default function Header() {
  return (
    <header className={cx('header')}>
      <h1 className={cx('header__title')}>
        Scrum
      </h1>
      <ul className={cx('header__lang-list')}>
        <li>
          <div className={cx('header__lang-wrapper')}>
            <div>
              <Image
                alt='Language'
                src={languages[0]?.icon}
                width={28}
                height={28}
              />
            </div>
            <div className={cx('header__lang-accardion-wrapper')}>
              {
                languages?.map(lang => (
                  <div className={cx('header__lang-accardion')}>
                    <Image
                      alt='Language'
                      src={lang?.icon}
                      width={28}
                      height={28}
                    />
                    <p>{lang?.subtitle}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </li>
        <li>
          <Image
            alt='Language'
            src={SettingsImg}
            width={24}
            height={24}
          />
        </li>
      </ul>
    </header>
  )
}
