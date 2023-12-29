"use client"

import BlogCard from '@/components/BlogCard';
import ImageSlider from '@/components/ImageSlider';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

// const images = [
//   {
//     src: 'https://res.cloudinary.com/dcsvvfai3/image/upload/v1702149084/f43zvnfaqlntqxafrcbj.jpg',
//     alt: 'Image 1',
//     title: 'This is the first image.',
//     description: 'This is a short description of the blog',
//   },
//   {
//     src: 'https://images.pexels.com/photos/19199263/pexels-photo-19199263/free-photo-of-rows-of-desks-and-chairs-in-a-classroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     alt: 'Image 2',
//     title: 'This is the second image.',
//     description: 'This is a short description of the blog',
//   },
//   {
//     src: 'https://images.pexels.com/photos/19191592/pexels-photo-19191592/free-photo-of-tower-of-the-phanar-greek-orthodox-college.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     alt: 'Image 3',
//     title: 'This is the third image.',
//     description: 'This is a short description of the blog',
//   },
//   {
//     src: 'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     alt: 'Image 4',
//     title: 'This is the fourth image.',
//     description: 'This is a short description of the blog',
//   },
//   {
//     src: 'https://images.pexels.com/photos/6177604/pexels-photo-6177604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     alt: 'Image 5',
//     title: 'This is the fifth image.',
//     description: 'This is a short description of the blog',
//   },
  
// ];


// const Posts = [
//   { 
//     key: 0,
//     image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     date: '08.10.2023',
//     title: 'What collectors need to know about authenticity',
//     description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
//   },
//   {
//     key: 1,
//     image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     date: '08.10.2023',
//     title: 'What collectors need to know about authenticity',
//     description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
//   },
//   {
//     key: 2,
//     image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     date: '08.10.2023',
//     title: 'What collectors need to know about authenticity',
//     description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
//   },
//   {
//     key: 3,
//     image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     date: '08.10.2023',
//     title: 'What collectors need to know about authenticity',
//     description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
//   },
//   {
//     key: 4,
//     image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     date: '08.10.2023',
//     title: 'What collectors need to know about authenticity',
//     description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
//   },
//   {
//     key: 5,
//     image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     date: '08.10.2023',
//     title: 'What collectors need to know about authenticity',
//     description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
//   },
//   {
//     key: 6,
//     image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     date: '08.10.2023',
//     title: 'What collectors need to know about authenticity',
//     description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
//   },
// ];


const admins = [
  "soham.nimbalkar08@gmail.com",
  "2021.abhishek.jadhav@ves.ac.in",
  "mpitmnsk@gmail.com",
  "jadhavabhishek24k2@gmail.com",
  "info@mbakaro.com"
]

const categories = [
  "motivation",
  "career development"
]

const blogs = () => {

  const [posts, setPosts] = useState(null);

  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchPosts = async() => {
      // debugger;
      const response = await fetch('/api/blogs')
      const data = await response.json();
      setPosts(data);
    } 
  
    if(posts == null){
      // debugger;
      fetchPosts();

    } else{
      // debugger;
      setImages(
        posts.map((post) => ({
          src: post.coverImg || '',
          alt: 'image not found',
          title: post.title || '',
          description: post.description || '',
        }))
      );
    }
    
  }, [posts])


  const handleTagClick = (category) => {
    const regex = new RegExp(category, "i"); // 'i' flag for case-insensitive search
    const filteredResult = allPost?.filter(
      (item) =>
        regex.test(item.category) 
    );
    setPosts(filteredResult)
  }
  
  

  return (
    <div className='mx-auto'>
      <ImageSlider images={images} />
      {/* <div className="add-btn m-10">
        {admins.includes(session?.user.email)?(
          <>
            <Link href={"/add-blog"} className='text-white bg-neutral-900 no-underline border border-black px-8 py-3 text-sm hover:text-white hover:border-red-500 hover:bg-red-500 transition duration-500 ease-in-out rounded-md'>Add Blog</Link>
          </>):(
          <></>
          )
        }
      </div> */}
      <div className="feed flex flex-col px-4 sm:px-4 md:px-14 pt-16">
        <div className="title">
          <h2 className='text-6xl font-bold'>Latest Blogs</h2>
        </div>
        <div className="filters bg-slate-200 w-fit px-9 py-2 my-3 rounded-lg">
          <ul className='flex flex-row gap-3.5 text-base'>
            {categories.map((category) => (
              <p onClick={() => handleTagClick(category)} className='cursor-pointer'>{category}</p>
            ))}
          </ul>
        </div>
        <div className="feedList my-8 flex flex-wrap gap-8">
          {posts?.map((post) => (  
            <BlogCard post={post}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default blogs