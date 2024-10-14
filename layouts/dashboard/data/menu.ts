import {
  MdOutlineDashboard,
  MdDomain,
  MdOutlineClearAll,
  MdPeople,
  MdDvr
} from 'react-icons/md'

export const sidebarMenus = [
  {
    id: 1,
    name: 'Dashboard',
    icon: MdOutlineDashboard,
    href: '/dashboard'
  },
  {
    id: 2,
    name: 'Departemen',
    icon: MdDomain,
    href: '/dashboard/department'
  },
  {
    id: 3,
    name: 'Tingkat',
    icon: MdOutlineClearAll,
    href: '/dashboard/tingkat'
  },
  {
    id: 4,
    name: 'Groups',
    icon: MdPeople,
    href: '/dashboard/groups'
  },
  {
    id: 5,
    name: 'Subjects',
    icon: MdDvr,
    children: [
      {
        id: 1,
        name: 'List',
        href: '/dashboard/subjects'
      },
      {
        id: 2,
        name: 'Add',
        href: '/dashboard/subjects/add'
      }
    ]
  },
  {
    id: 6,
    name: 'Settings',
    icon: MdDvr,
    children: [
      {
        id: 1,
        name: 'Profile',
        href: '/dashboard/profile'
      },
      {
        id: 2,
        name: 'Change Password',
        href: '/dashboard/change-password'
      },
      {
        id: 3,
        name: 'Logout',
        href: '/dashboard/logout'
      },
      {
        id: 4,
        name: 'Users',
        href: '/dashboard/users'
      }
    ]
  }
]
