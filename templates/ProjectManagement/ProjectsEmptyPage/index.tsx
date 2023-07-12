import Layout from '@/components/Layout'
import Empty from '@/components/Empty'

const ProjectsEmptyPage = () => {
  return (
    <Layout title="All Projects" background>
      <Empty
        title="No projects found?"
        content="Try to assign more tasks to your employees or create a new project from scratch"
        imageSvg={
          <svg
            className="fill-n-1 dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="92"
            viewBox="0 0 79 92"
          >
            <path d="M44.763 69.886l30.015-45.715c2.439-3.714 4.397-7.03 4.21-11.602-.094-2.294.1-4.582-.43-6.846C77.114-.439 70.799-.702 65.708.694c-1.783.489-3.598.837-5.274 1.698-1.691.869-3.168 2.24-4.474 3.602l-8.978 9.593-18.43 19.424-9.439 10.031c-1.536 1.647-2.828 2.822-4.743 4.01-1.825 1.133-3.931 2.155-5.498 3.643-3.379 3.209-2.153 7.566 1.127 10.228l5.366 4.267L30.142 78.89c2.795 2.222 6.106 5.597 9.949 3.498 2.227-1.216 2.817-3.602 3.329-5.876l1.688-7.496-1.011 1.731.052-.066c1.305-1.668 1.63-3.92 0-5.546-1.359-1.356-4.246-1.679-5.56 0-1.324 1.691-1.529 3.865-1.991 5.919l-.675 2.998-.338 1.499c-.357 1.535-.317.081.934-.206h2.09c-1.043-.142-2.553-1.721-3.69-2.624l-5.304-4.202-11.252-8.907c-.421-.334-3.485-3.259-3.887-3.143-.207.06-.062 1.981-.216 1.915a50.98 50.98 0 0 1 .82-.537l2.281-1.416c1.66-1.031 3.562-1.96 4.967-3.321 5.29-5.126 10.132-10.818 15.207-16.161l15.532-16.373 7.58-8.105c.909-.977 1.819-2.066 2.921-2.829s2.362-.841 3.637-1.216c1.023-.3 2.33-.636 2.98-.685.194-.015 1.397-.064.918-.048-.608.021.135.002.09.026.347.11.363.102.048-.024-.259-.123-.297-.136-.114-.04.058.054-.503-.529.037.062-.377-.413-.313-.342-.371-.555l.24.921c.051.207.061.729-.016-.156.018.211.044.423.051.636.06 1.851.396 4.079.104 5.884-.227 1.405-1.177 2.684-1.93 3.852l-3.169 4.829-28.099 42.798c-2.781 4.235 4.025 8.169 6.79 3.959h0z" />
            <path d="M34.784 29.003l-19.728.661c-3.166.106-6.466.177-9.168 2.053-2.393 1.661-3.974 4.071-5.378 6.569-.769 1.369-.748 3.683.615 4.752l12.722 9.984c1.667 1.308 3.933 1.623 5.56 0 1.364-1.36 1.678-4.229 0-5.546L6.685 37.493l.615 4.752c.889-1.582 1.9-3.607 3.335-4.245 1.92-.855 4.744-.504 6.887-.575l17.262-.578c2.123-.071 3.932-1.751 3.932-3.922 0-2.07-1.8-3.993-3.932-3.922h0zm15.825 20.014l3.494 16.243.841 3.91c.23 1.075.622 2.334.397 3.453-.316 1.575-2.162 3.101-3.373 4.24h5.56l-12.795-9.89c-1.677-1.296-3.926-1.63-5.56 0-1.355 1.351-1.688 4.241 0 5.546l12.795 9.89c1.719 1.329 3.853 1.605 5.56 0 2.171-2.042 4.286-4.297 5.21-7.197 1.017-3.192.145-6.468-.535-9.631l-4.011-18.649c-.446-2.072-2.873-3.277-4.836-2.739-2.148.589-3.193 2.746-2.746 4.824h0zM21.542 66.51c-4.849.678-9.608 2.034-12.494 6.303-1.382 2.045-1.595 4.493-1.929 6.861L6.085 87.03c-.202 1.437-.078 2.73 1.011 3.816.977.974 2.487 1.404 3.825 1.008.32-.094.64-.178.968-.242 1.03-.202-.59-.004.23-.034.579-.021 1.156-.063 1.736-.066 1.255-.006 2.512.058 3.766-.019 3.11-.19 6.244-1.141 8.354-3.565 2.053-2.359 3.08-5.215 3.304-8.309.227-3.126-.598-6.286-1.405-9.28-.534-1.981-2.825-3.388-4.836-2.739-2.038.658-3.318 2.701-2.746 4.824.335 1.244.67 2.49.916 3.756.064.329.116.66.172.99.082.476-.032-.652.002.117.03.669.082 1.327.052 1.998-.012.271-.077.585-.069.857l.065-.52a10.12 10.12 0 0 1-.102.519c-.106.478-.267.929-.415 1.395-.144.451.384-.713.03-.091-.13.227-.242.464-.379.687-.067.111-.138.22-.213.327-.167.239-.091.148.229-.274-.182.143-.352.408-.519.573l-.186.178c-.319.273-.254.232.197-.124.002.081-.485.316-.546.352a4.88 4.88 0 0 1-.366.196c.469-.182.567-.222.294-.119-.221.069-.438.152-.662.213-.1.027-.713.255-.816.18l.35-.043a9.94 9.94 0 0 1-.422.041 22.13 22.13 0 0 1-1.72.057c-2.469.004-4.954-.106-7.354.603l4.836 4.824.914-6.501.455-3.226a14.68 14.68 0 0 1 .275-1.455c.029-.115.249-1.011.098-.436-.127.485.089-.168.151-.278.086-.153.184-.298.277-.448.432-.7-.389.375-.049.066.188-.171.785-.604.855-.831-.414.307-.503.375-.267.205a4.69 4.69 0 0 1 .22-.153 9.67 9.67 0 0 1 .568-.357 9.78 9.78 0 0 1 .471-.257c.037-.019.823-.384.282-.149-.553.24.284-.096.399-.135a15.28 15.28 0 0 1 .76-.236 20.1 20.1 0 0 1 1.395-.339c1.045-.218 2.104-.365 3.161-.513.904-.126 1.913-1.057 2.35-1.802.493-.841.702-2.079.396-3.022-.308-.949-.897-1.864-1.807-2.344-1.001-.527-1.92-.551-3.029-.395h0zm38.439-46.059h0a2.98 2.98 0 0 0 1.487.474c.532.119 1.063.095 1.595-.071a3.02 3.02 0 0 0 1.36-.715 3.02 3.02 0 0 0 1.03-1.121l.403-.955a4.02 4.02 0 0 0 0-2.125l-.403-.955c-.356-.601-.834-1.079-1.435-1.434h0a2.98 2.98 0 0 0-1.487-.474c-.532-.119-1.063-.095-1.595.071a3.01 3.01 0 0 0-1.36.716 3.02 3.02 0 0 0-1.03 1.121l-.403.955a4.02 4.02 0 0 0 0 2.125l.403.955c.356.601.834 1.079 1.435 1.434z" />
          </svg>
        }
        buttonText="Create a new project"
      />
    </Layout>
  )
}

export default ProjectsEmptyPage
