import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import Image from '@/components/Image'
import Checkbox from '@/components/Checkbox'
import Users from '@/components/Users'
import TablePagination from '@/components/TablePagination'

import { files } from '@/mocks/projects'

const FileManagerFilesPage = () => {
  const [value, setValue] = useState<boolean>()
  return (
    <Layout title="File Manager  /  Recent Uploads">
      <div className="">
        <div className="mb-6 flex justify-between md:mb-5">
          <button className="btn-stroke btn-small">
            <Icon name="add-folder" />
            <span>Add New Folder</span>
          </button>
          <button className="btn-stroke btn-small">
            <Icon name="upload" />
            <span>Upload New File</span>
          </button>
        </div>
        <div className="card">
          {files.map((file: any) => (
            <div
              className="flex items-center border-t border-n-1 px-4 py-5 first:border-none dark:border-white md:py-4"
              key={file.id}
            >
              <Checkbox className="mr-3.5 shrink-0 md:hidden" value={value} onChange={() => setValue(!value)} />
              <Link
                className="flex grow cursor-pointer items-center pr-6 text-sm font-bold transition-colors hover:text-purple-1"
                href="/projects/file-manager-details"
              >
                <div className="mr-3.5 flex h-8 w-8 items-center justify-center bg-background p-1.5">
                  <Image className="w-full" src={file.logo} width={20} height={20} alt="File" />
                </div>
                {file.title}
              </Link>
              <div className="w-36 shrink-0 text-xs font-medium lg:w-24 md:hidden">{file.size}</div>
              <div className="w-36 shrink-0 text-xs font-medium lg:hidden">{file.date}</div>
              <Users className="w-28 shrink-0 lg:hidden" items={file.users} large border />
              <button className="btn-transparent-dark btn-small btn-square ml-4 shrink-0 md:hidden">
                <Icon name="dots" />
              </button>
            </div>
          ))}
        </div>
        <TablePagination />
      </div>
    </Layout>
  )
}

export default FileManagerFilesPage
