import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import Details from './Details'

const responsibilities = [
  'These hands on components will let you apply',
  'Projects will incorporate topics such as Google Cloud Platform',
  'You can expect to gain practical hands-on experience',
]

const skills = ['Business', 'Marketing', 'Development', 'Entrepreneur', 'HTML']

const list = [
  'Identify the purpose and value of Google Cloud Platform products and services',
  'Implement federated identity management using Firebase authentication',
  'Deploy applications using Container Builder, Container Registry, and Deployment Manager',
]

const career = [
  {
    content: 'Started a new career after completing courses',
    progressValue: 30,
  },
  {
    content: 'Got a tangible career benefit from this course',
    progressValue: 65,
    progressColor: '#98E9AB',
  },
]

const CoursesDetailsPage = () => {
  return (
    <Layout title="Course details" background back>
      <div className="flex pt-4 lg:block">
        <div className="mr-20 w-[21rem] shrink-0 4xl:w-[16.5rem] xl:mr-10 lg:mb-10 lg:w-full">
          <Details />
        </div>
        <div className="card grow">
          <div className="card-title">About this specialization</div>
          <div className="px-5 pb-8 pt-6">
            <div className="mb-2 font-bold">Overview:</div>
            <div className="text-sm">
              In this specialization, application developers learn how to design, develop, and deploy applications that
              seamlessly integrate managed services from the Google Cloud Platform (GCP). Through a combination of
              presentations, demos, and hands-on labs, participants learn how to use GCP services and pre-trained
              machine learning APIs to build secure, scalable, and intelligent cloud-native applications. Learners can
              choose to complete labs in their favorite language: Node.js, Java, or Python. This class is intended for
              application developers who want to build cloud-native applications.
            </div>
            <div className="mt-6 border-t border-dashed border-n-1 pt-6 dark:border-white">
              <div className="mb-2 font-bold">Responsibilities:</div>
              <div>
                {responsibilities.map((item, index) => (
                  <div
                    className="relative pl-4 text-sm before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:bg-n-1 dark:before:bg-white"
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <button className="group mt-3 inline-flex items-center text-xs font-bold transition-colors hover:text-purple-1">
                <Icon className="mr-1.5 transition-colors group-hover:fill-purple-1 dark:fill-white" name="dots" />
                See more
              </button>
            </div>
            <div className="mt-6 border-t border-dashed border-n-1 pt-6 dark:border-white">
              <div className="mb-2 font-bold">Skills you will learn:</div>
              <div className="text-sm">
                Through a combination of presentations, demos, and hands-on labs, participants learn how to use GCP
                services and pre-trained machine learning APIs to build secure, scalable, and intelligent cloud-native
                applications.
              </div>
              <div className="-ml-1 mt-2 flex flex-wrap">
                {skills.map((skill, index) => (
                  <div className="label-black ml-1 mt-1" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-dashed border-n-1 pt-6 dark:border-white">
              <div className="mb-5 font-bold">What you will learn:</div>
              <div>
                {list.map((item, index) => (
                  <div
                    className="mb-3 flex items-start border-b border-n-1/40 pb-3 text-sm last:mb-0 last:border-none last:pb-0 dark:border-white/40"
                    key={index}
                  >
                    <div className="mr-2.5 flex h-5 w-5 shrink-0 items-center justify-center bg-green-1">
                      <Icon className="fill-white" name="check" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-dashed border-n-1 pt-6 dark:border-white">
              <div className="mb-2 font-bold">Learner career outcomes:</div>
              <div className="mb-6 text-sm">
                Demos, and hands-on labs, participants learn how to use GCP services and pre-trained machine learning
                APIs to build secure, scalable, and cloud-native applications.{' '}
              </div>
              <div className="-mx-5 -mt-10 flex flex-wrap md:-mt-6">
                {career.map((item, index) => (
                  <div className="mx-5 mt-10 w-[calc(50%-2.5rem)] md:mt-6 md:w-[calc(100%-2.5rem)]" key={index}>
                    <div
                      className="relative mb-4 h-1.5 bg-yellow-1"
                      style={{
                        backgroundColor: item.progressColor,
                      }}
                    >
                      <div
                        className="absolute bottom-0 left-0 top-0 bg-n-1/30"
                        style={{
                          width: item.progressValue + '%',
                        }}
                      ></div>
                    </div>
                    <div className="flex">
                      <div className="grow text-sm font-medium">{item.content}</div>
                      <div className="ml-10 shrink-0 font-bold">{item.progressValue}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CoursesDetailsPage
