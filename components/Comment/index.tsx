import TextareaAutosize from 'react-textarea-autosize'
import Icon from '@/components/Icon'
import Image from '@/components/Image'

type CommentProps = {
  className?: string
  avatar?: string
  placeholder: string
  value: any
  setValue: any
}

const Comment = ({ className, avatar, placeholder, value, setValue }: CommentProps) => {
  return (
    <form
      className={`shadow-primary-4 flex border border-n-1 bg-white py-1 pl-1 pr-5 dark:border-white dark:bg-n-1 md:pr-4 ${className}`}
      action=""
      onSubmit={() => console.log('Submit')}
    >
      {avatar && (
        <div className="relative ml-4 h-8.5 w-8.5 self-center">
          <Image className="rounded-full object-cover" src={avatar} fill alt="Avatar" />
        </div>
      )}
      <TextareaAutosize
        className="grow resize-none self-center bg-transparent px-4 py-2 text-sm font-medium text-n-1 outline-none placeholder:text-n-1 dark:text-white dark:placeholder:text-white md:px-3"
        maxRows={5}
        autoFocus
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        required
      />
      <div className="flex h-[3.375rem] shrink-0 items-center">
        <button className="btn-transparent-dark btn-small btn-square mr-1 md:hidden" type="button">
          <Icon name="smile" />
        </button>
        <button className="btn-transparent-dark btn-small btn-square mr-3 md:hidden" type="button">
          <Icon name="plus" />
        </button>
        <button className="btn-purple btn-small btn-square" type="submit">
          <Icon name="send" />
        </button>
      </div>
    </form>
  )
}

export default Comment
