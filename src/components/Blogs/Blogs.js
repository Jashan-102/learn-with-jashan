import React, { Fragment } from 'react'
import Card from '../Other/Card'
import { blogsContent } from '../Other/content/blogsContent'

export default function Blogs(props) {
  return (
    <div className="container mx-auto ">
      <div className='grid md:grid-cols-2 grid-row-2 gap-4'>
        {blogsContent?.map((blog) => <Fragment key={blog.id}><Card blogDetails={blog} /></Fragment>)}
      </div>
    </div>
  )
}
