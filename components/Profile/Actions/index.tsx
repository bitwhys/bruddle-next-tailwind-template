import Icon from '@/components/Icon'

type ActionsProps = {}

const Actions = ({}: ActionsProps) => (
  <div className="mt-8 flex md:mt-5">
    <button className="btn-stroke btn-medium grow">
      <Icon name="add-circle" />
      <span>Add new task</span>
    </button>
    <button className="btn-stroke btn-square btn-medium ml-1.5 shrink-0">
      <Icon name="email" />
    </button>
    <button className="btn-stroke btn-square btn-medium ml-1.5 shrink-0">
      <Icon name="arrow-up-right" />
    </button>
  </div>
)

export default Actions
