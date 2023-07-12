import Image from '@/components/Image'
import Actions from './Actions'

const skills = ['Business', 'Marketing', 'Founder', 'Interface Design', 'User Experience', 'Development', 'Mobile App']

type ProfileProps = {}

const Profile = ({}: ProfileProps) => (
  <>
    <div className="relative mb-2.5 h-21 w-21">
      <Image className="rounded-full object-cover" src="/images/avatar-1.jpg" fill alt="Avatar" />
    </div>
    <div className="text-h4">Anne-Marije Markin</div>
    <div className="mb-6 text-sm">markin.ann@gmail.com</div>
    <div className="mt-6 border-t border-dashed border-n-1 pt-6 dark:border-white">
      <div className="mb-1.5 font-bold">Short bio</div>
      <div className="text-sm">
        Once your resume is on Indeed, you can choose to make it “Public” or “Private.” There are benefits to both
        options.
      </div>
    </div>
    <div className="mt-6 border-t border-dashed border-n-1 pt-6 dark:border-white">
      <div className="mb-3 font-bold">Skills</div>
      <div className="-ml-1 -mt-1.5 flex flex-wrap">
        {skills.map((skill, index) => (
          <div className="label-stroke ml-1 mt-1.5" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
    <Actions />
  </>
)

export default Profile
