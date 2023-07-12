import Icon from '@/components/Icon'

type TablePaginationProps = {}

const TablePagination = ({}: TablePaginationProps) => (
  <div className="mt-6 flex items-center justify-between md:mt-5">
    <button className="btn-stroke btn-small">
      <Icon name="arrow-prev" />
      <span>Prev</span>
    </button>
    <div className="text-sm font-bold">Page 1 of 10</div>
    <button className="btn-stroke btn-small">
      <span>Next</span>
      <Icon name="arrow-next" />
    </button>
  </div>
)

export default TablePagination
