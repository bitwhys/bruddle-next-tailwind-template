import Layout from '@/components/Layout'
import Messages from './Messages'
import Chat from './Chat'
import { useState } from 'react'

const ChatPage = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <Layout title="Inbox">
      <div className="card flex h-[calc(100vh-10.7rem)] lg:block lg:h-auto">
        <Messages setVisible={setVisible} />
        <Chat visible={visible} onClose={() => setVisible(false)} />
      </div>
    </Layout>
  )
}

export default ChatPage
