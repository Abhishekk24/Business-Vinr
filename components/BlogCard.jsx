import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ post }) => {
  return (
    <div className='flex flex-col p-4 bg-slate-100 w-1/5 min-w-[300px] rounded-lg hover:scale-105 duration-200 ease-in-out'>
      <Link href={`/blog/${post._id}`}>
        <img src={post.coverImg} alt="not found" className='w-72 rounded-t-lg hover:brightness-75 duration-200'/>
        <p className='font-extralight px-2 pt-2 font-serif'>{post.createdAt.substring(0, 10)}</p>
        <h2 className='font-bold text-lg px-2'>{post.title}</h2>
        <p className='font-extralight px-2'>{post.description}</p>
        <p className='font-extralight text-xs px-2'>#{post.category}</p>
      </Link>
    </div>
  )
}

export default BlogCard