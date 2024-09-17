import { StaticImageData } from 'next/image'
import OnlineLearning from '@/public/images/sidebar/learning.png'
import { Routes } from './routes'

export interface IMenuUi {
  icon: StaticImageData,
  title: string,
  path: string,
}

export const SidebarMenu: IMenuUi[] = [
  {
    icon: OnlineLearning,
    title: 'My courses',
    path: Routes.MyCourse,
  },
  {
    icon: OnlineLearning,
    title: 'My courses',
    path: Routes.MyCourse,
  },
  {
    icon: OnlineLearning,
    title: 'My courses',
    path: Routes.MyCourse,
  },
]
