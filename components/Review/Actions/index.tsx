import { useState } from 'react'
import Icon from '@/components/Icon'
import Comment from '@/components/Comment'

type ActionsProps = {
  comments: number
  likes: number
}

const Actions = ({ comments, likes }: ActionsProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <>
      <div className="mt-3 flex">
        <button className="btn-transparent-dark btn-small mr-5 px-0">
          <Icon name="comments" />
          <span>{comments}</span>
        </button>
        <button className="btn-transparent-dark btn-small px-0">
          <Icon name="like" />
          <span>{likes}</span>
        </button>
        <button
          className={`btn-transparent-dark btn-small btn-square -mr-2 ml-auto ${visible ? '!fill-purple-1' : ''}`}
          onClick={() => setVisible(!visible)}
        >
          <Icon name="reply" />
        </button>
      </div>
      {visible && (
        <Comment
          className="mb-2 mt-4 border-dashed !py-0 !pl-0 !pr-4 shadow-none md:-ml-12 md:!pr-3"
          placeholder="Type to add your comment"
          value={value}
          setValue={(e: any) => setValue(e.target.value)}
        />
      )}
    </>
  )
}

export default Actions
