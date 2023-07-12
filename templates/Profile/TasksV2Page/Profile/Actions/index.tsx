import Icon from '@/components/Icon'

type ActionsProps = {}

const Actions = ({}: ActionsProps) => (
  <div className="mt-6 flex border-t border-dashed border-n-1 pt-6">
    <button className="btn-purple btn-medium grow dark:border-transparent">
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
