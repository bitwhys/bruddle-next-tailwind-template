import Link from 'next/link'
import Icon from '@/components/Icon'
import ToggleTheme from './ToggleTheme'

const navigations = [
  {
    title: 'Privacy Policy',
    url: '/',
  },
  {
    title: 'License',
    url: '/',
  },
  {
    title: 'API',
    url: '/',
  },
]

type FooterProps = {}

const Footer = ({}: FooterProps) => (
  <footer className="">
    <div className="mx-auto flex h-16 max-w-[90rem] items-center px-16 2xl:px-8 lg:px-6 md:px-5">
      <button className="mr-8 inline-flex items-center text-xs font-bold transition-colors hover:fill-purple-1 hover:text-purple-1 dark:fill-white dark:hover:fill-purple-1 md:mr-auto">
        <Icon className="mr-1.5 fill-inherit" name="earth" />
        English
      </button>
      <div className="mr-auto flex">
        {navigations.map((link, index) => (
          <Link
            className="mr-8 text-xs font-bold transition-colors last:mr-0 hover:text-purple-1 md:mr-4"
            href={link.url}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <ToggleTheme />
    </div>
  </footer>
)

export default Footer
