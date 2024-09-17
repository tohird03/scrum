import { StaticImageData } from 'next/image'
import EngIcon from '@/public/images/english.png'
import UzIcon from '@/public/images/uzbekistan.png'
import RuIcon from '@/public/images/russia.png'

export interface ILangsUi {
  icon: StaticImageData,
  title: string,
  subtitle: string,
}

export const languages: ILangsUi[] = [
  {
    icon: EngIcon,
    title: 'English',
    subtitle: 'Eng',
  },
  {
    icon: UzIcon,
    title: 'O\'zbek',
    subtitle: 'O\'z',
  },
  {
    icon: RuIcon,
    title: 'Русский',
    subtitle: 'Ru',
  },
]
