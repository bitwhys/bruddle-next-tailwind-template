import { useState } from 'react'
import Layout from '@/components/Layout'
import Search from '@/components/Search'
import Article from '@/components/Article'
import Post from './Post'

import { products, popularArticles } from '@/mocks/support'

const HomePage = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <Layout title="Help Center" background>
      <div className="mx-auto mb-18 w-full max-w-[41.25rem] pt-12 md:mb-10 md:pt-6">
        <div className="mb-6 text-center text-h1 md:text-h3">How can we help you?</div>
        <Search
          className="mb-3.5"
          placeholder="Search help articles"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          onSubmit={() => console.log('Submit')}
          large
        />
        <div className="text-center">
          For example <strong>How to create an account</strong>
        </div>
      </div>
      <div className="mb-5 text-sm font-bold">Products</div>
      <div className="-mx-2.5 -mt-2.5 mb-8 flex flex-wrap md:mx-0 md:block">
        {products.map(article => (
          <Article
            className="mx-2.5 mt-2.5 w-[calc(33.333%-1.25rem)] 2xl:w-[calc(50%-1.25rem)] md:mx-0 md:w-full"
            item={article}
            key={article.id}
          />
        ))}
      </div>
      <div className="mb-5 text-sm font-bold">Popular help articles</div>
      <div className="-mx-2.5 -mt-2.5 flex flex-wrap lg:mx-0 lg:block">
        {popularArticles.map(article => (
          <Post item={article} key={article.id} />
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
