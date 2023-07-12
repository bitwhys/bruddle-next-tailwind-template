import { useState } from 'react'
import Link from 'next/link'
import { useColorMode } from '@chakra-ui/color-mode'
import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import Image from '@/components/Image'
import Checkbox from '@/components/Checkbox'

import { folders } from '@/mocks/projects'

const FileManagerFoldersPage = () => {
  const [value, setValue] = useState<boolean>()
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  return (
    <Layout title="File Manager">
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
          {folders.map((folder: any) => (
            <div
              className="flex items-center border-t border-n-1 px-4 py-5 first:border-none dark:border-white md:py-4 md:pl-3"
              key={folder.id}
            >
              <Checkbox className="mr-3 shrink-0 md:hidden" value={value} onChange={() => setValue(!value)} />
              <Link
                className="flex grow cursor-pointer items-center pr-6 text-sm font-bold transition-colors hover:text-purple-1"
                href="/projects/file-manager-files"
              >
                <div className="mr-2 w-8">
                  <Image
                    className="w-full"
                    src={isDarkMode ? '/images/folder-light.svg' : '/images/folder-dark.svg'}
                    width={32}
                    height={32}
                    alt="Folder"
                  />
                </div>
                {folder.title}
              </Link>
              <div className="mr-6 flex shrink-0 items-center justify-end text-xs font-bold md:mr-0">
                <Icon className="mr-1 dark:fill-white" name="file" />
                {folder.files}
              </div>
              <div
                className={`min-w-[6rem] shrink-0 md:hidden ${
                  folder.status === 'Teammate'
                    ? 'label-stroke-purple'
                    : folder.status === 'Personal'
                    ? 'label-stroke-green'
                    : 'label-stroke'
                }
                                }`}
              >
                {folder.status}
              </div>
              <button className="btn-transparent-dark btn-small btn-square ml-4 shrink-0 md:hidden">
                <Icon name="dots" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default FileManagerFoldersPage
