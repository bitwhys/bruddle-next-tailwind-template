import { useState } from 'react'
import Layout from '@/components/Layout'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import GeneralInformation from './GeneralInformation'

const menu = [
  {
    id: '0',
    title: 'General information',
    content: 'Title, company, and more',
    icon: 'document',
  },
  {
    id: '1',
    title: 'Team',
    content: 'Manage members',
    icon: 'team',
  },
  {
    id: '2',
    title: 'Billing',
    content: 'Setup payment methods',
    icon: 'card',
  },
  {
    id: '3',
    title: 'Apps',
    content: 'Linked apps and services',
    icon: 'apps',
  },
  {
    id: '4',
    title: 'Notifications',
    content: 'Your email notifications',
    icon: 'notification-bell',
  },
  {
    id: '5',
    title: 'Send to Archieve',
    content: 'Store project in archieve',
    icon: 'archieve',
  },
]

const ProjectsDetailsPage = () => {
  const [activeId, setActiveId] = useState<string>('0')
  const [visible, setVisible] = useState<boolean>(false)

  const handleClick = (id: string) => {
    setActiveId(id)
    setVisible(true)
  }

  return (
    <Layout title="Project details" back>
      <div className="card flex lg:block">
        <div className="relative w-96 shrink-0 border-r border-n-1 px-5 pb-7 pt-19 dark:border-white 4xl:w-80 lg:w-full lg:border-none md:pt-12">
          <button className="group absolute right-5 top-5 h-8 w-8">
            <Icon className="transition-colors group-hover:fill-purple-1 dark:fill-white" name="camera" />
          </button>
          <div className="mx-auto mb-3 h-21 w-21 rounded-full bg-background p-5">
            <Image className="w-full" src="/images/slack.svg" width={46} height={46} alt="Logo" />
          </div>
          <div className="mb-1 text-center text-h5">Interface development</div>
          <div className="mb-10 text-center text-sm md:mb-6">Dribbble Inc.</div>
          <div>
            {menu.map(button => (
              <button
                className={`flex w-full items-center py-4 pl-7 pr-4 transition-colors tap-highlight-color hover:bg-background/60 dark:hover:bg-n-2 ${
                  button.id === activeId && 'bg-background dark:bg-n-2'
                }`}
                key={button.id}
                onClick={() => handleClick(button.id)}
              >
                <Icon className="icon-18 mr-6 shrink-0 dark:fill-white" name={button.icon} />
                <div className="grow text-left">
                  <div className="mb-1 text-sm font-bold">{button.title}</div>
                  <div className="text-xs">{button.content}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div
          className={`flex grow flex-col pb-7 pl-10 pr-6 pt-6 dark:bg-n-1 lg:invisible lg:fixed lg:inset-0 lg:z-[100] lg:overflow-auto lg:scroll-smooth lg:bg-white lg:px-5 lg:py-8 lg:opacity-0 lg:transition-opacity md:pt-6 ${
            visible ? 'lg:!visible lg:!opacity-100' : ''
          }`}
        >
          <button
            className="mb-6 hidden items-center text-sm font-bold text-purple-1 tap-highlight-color lg:inline-flex"
            onClick={() => setVisible(false)}
          >
            <Icon className="icon-18 mr-2 fill-purple-1" name="arrow-prev" />
            Back to the menu
          </button>
          <GeneralInformation />
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsDetailsPage
