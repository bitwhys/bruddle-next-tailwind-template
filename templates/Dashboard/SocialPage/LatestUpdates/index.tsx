import Icon from '@/components/Icon'
import Review from '@/components/Review'

import { reviews } from '@/mocks/reviews'

type LatestUpdatesProps = {}

const LatestUpdates = ({}: LatestUpdatesProps) => {
  return (
    <>
      <div className="mb-3.5 flex items-center justify-between">
        <div className="text-h6">Latest updates</div>
        <button className="inline-flex items-center font-bold transition-colors hover:fill-purple-1 hover:text-purple-1 dark:fill-white dark:hover:fill-purple-1">
          <Icon className="icon-18 mr-1.5 fill-inherit" name="filters" />
          All projects
        </button>
      </div>
      <div>
        {reviews.map(review => (
          <Review item={review} key={review.id} />
        ))}
      </div>
    </>
  )
}

export default LatestUpdates
