import { useState } from 'react'
import Icon from '@/components/Icon'
import Tabs from '@/components/Tabs'
import Experience from './Experience'
import Connections from './Connections'

type DetailsProps = {}

const Details = ({}: DetailsProps) => {
  const [type, setType] = useState<string>('experience')

  const types = [
    {
      title: 'Experience',
      value: 'experience',
    },
    {
      title: 'Education',
      value: 'education',
    },
    {
      title: 'Certificates',
      value: 'certificates',
    },
    {
      title: 'Portfolio',
      value: 'portfolio',
    },
  ]

  return (
    <>
      <div className="mb-6 flex items-center justify-between md:mb-5 md:block">
        <Tabs className="md:ml-0" classButton="md:ml-0 md:grow md:px-3" items={types} value={type} setValue={setType} />
        <button className="btn-stroke btn-small min-w-[6rem] md:hidden">
          <Icon name="dots" />
          <span>Actions</span>
        </button>
      </div>
      <div className="card mb-4">
        <div className="card-title">Work experience</div>
        <div className="p-5">
          <Experience />
        </div>
      </div>
      <div className="card">
        <div className="card-title">Connections</div>
        <div className="p-5">
          <Connections />
        </div>
      </div>
    </>
  )
}

export default Details
