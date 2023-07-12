import Link from 'next/link'
import Image from '@/components/Image'
import Icon from '@/components/Icon'

import { teamMembers } from '@/mocks/teamMembers'

type TeamMembersProps = {
  visible?: boolean
}

const TeamMembers = ({ visible }: TeamMembersProps) => {
  return (
    <>
      <div
        className={`mb-3 overflow-hidden whitespace-nowrap text-xs font-medium text-white/50 ${
          visible ? 'w-full opacity-100' : 'xl:w-0 xl:opacity-0'
        }`}
      >
        Team Members
      </div>
      <div className="-mx-4">
        {teamMembers.map(member => (
          <Link
            className={`mb-1.5 flex h-9.5 items-center px-4 text-sm font-bold text-white transition-colors last:mb-0 hover:bg-[#161616] ${
              visible ? 'px-4 text-sm' : 'xl:px-0 xl:text-0'
            }`}
            href={member.url}
            key={member.id}
          >
            <div
              className={`relative mr-2.5 h-5.5 w-5.5 shrink-0 overflow-hidden rounded-full ${
                visible ? 'ml-0 mr-2.5' : 'xl:mx-auto'
              }`}
            >
              <Image className="scale-105 object-cover" src={member.avatar} fill alt="Avatar" />
            </div>
            {member.title}
          </Link>
        ))}
      </div>
      <button
        className={`group mt-4 flex w-full items-center pl-0.5 text-xs font-medium text-white transition-colors hover:text-purple-1 ${
          visible ? 'text-xs' : 'xl:text-0'
        }`}
      >
        <Icon
          className={`icon-18 mr-3 fill-white transition-colors group-hover:fill-purple-1 ${
            visible ? 'mr-3' : 'xl:mr-0'
          }`}
          name="arrow-bottom"
        />
        See More
      </button>
    </>
  )
}

export default TeamMembers
