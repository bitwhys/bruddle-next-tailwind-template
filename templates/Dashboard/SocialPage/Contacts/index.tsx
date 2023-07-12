import Image from '@/components/Image'

import { contactsSocial } from '@/mocks/dashboard'

type ContactsProps = {}

const Contacts = ({}: ContactsProps) => (
  <>
    <div className="mb-3.5 text-h6">Contacts</div>
    <div className="card">
      {contactsSocial.map(contact => (
        <div
          className="flex items-center border-b border-n-1 px-4 py-3.5 last:border-none dark:border-white"
          key={contact.id}
        >
          <div className="relative h-6.5 w-6.5 shrink-0">
            <Image className="rounded-full object-cover" src={contact.avatar} fill alt="Avatar" />
          </div>
          <div className="mr-auto w-[calc(100%-4.81rem)] px-3">
            <div className="truncate text-sm font-bold">{contact.man}</div>
            <div className="truncate text-xs">{contact.email}</div>
          </div>
          <div className="flex shrink-0 items-center justify-end text-xs font-bold before:mr-1.5 before:h-2 before:w-2 before:rounded-full before:bg-purple-1">
            {contact.status}
          </div>
        </div>
      ))}
    </div>
  </>
)

export default Contacts
