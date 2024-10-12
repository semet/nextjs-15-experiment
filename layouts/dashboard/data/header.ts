import { MdOutlinePerson, MdSettings, MdLogout } from 'react-icons/md'

export const languages = [
  {
    id: 1,
    name: 'Indonesia',
    flag: '/images/flags/indonesia.svg'
  },
  {
    id: 2,
    name: 'English',
    flag: '/images/flags/usa.svg'
  },
  {
    id: 3,
    name: 'Chinese',
    flag: '/images/flags/china.svg'
  }
]

export const userMenu = [
  {
    id: 1,
    name: 'Profile',
    icon: MdOutlinePerson
  },
  {
    id: 2,
    name: 'Setting',
    icon: MdSettings
  },
  {
    id: 3,
    name: 'Logout',
    icon: MdLogout
  }
]
