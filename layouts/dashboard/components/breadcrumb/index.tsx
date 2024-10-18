import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdHome, MdKeyboardArrowRight } from 'react-icons/md'

export const Breadcrumb = () => {
  const { pathname } = useRouter()
  const paths = pathname.split('/').filter((path) => path)
  return (
    <ul className="flex items-end justify-center gap-1 md:justify-start">
      {paths.map((path) => {
        return (
          <li
            key={path}
            className="text-sm text-gray-500"
          >
            {path.toLowerCase() === 'dashboard' ? (
              <div className="flex items-end gap-1">
                <Link href={`/${path}`}>
                  <MdHome className="text-lg" />
                </Link>
                <MdKeyboardArrowRight className="text-lg" />
              </div>
            ) : (
              <span className="place-self-end">{path}</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
