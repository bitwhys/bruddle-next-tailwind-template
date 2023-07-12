type LoadingProps = {}

const Loading = ({}: LoadingProps) => (
  <div className="p-1.5">
    <div className="flex space-x-1.5">
      <div className="h-2 w-2 animate-[loaderDots_0.6s_0s_infinite_alternate] rounded-full bg-n-3 dark:bg-white"></div>
      <div className="h-2 w-2 animate-[loaderDots_0.6s_0.3s_infinite_alternate] rounded-full bg-n-3 dark:bg-white"></div>
      <div className="h-2 w-2 animate-[loaderDots_0.6s_0.6s_infinite_alternate] rounded-full bg-n-3 dark:bg-white"></div>
    </div>
  </div>
)

export default Loading
