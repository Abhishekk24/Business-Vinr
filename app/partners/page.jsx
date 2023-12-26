'use client'
import React, { useState } from 'react'
import {Tabs ,TabsList,TabsContent,TabsTrigger} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'


const projectData = [
  {
    image: '/brands/Cadcye.png',
    category: 'Cadcye',
    name: 'Cadcye',
    description: 'Cadcye provides cutting-edge networking solutions, specializing in innovative hardware and software products. From routers to switches, Cadcye delivers high-performance solutions for seamless connectivity.',
    link: '#',
    site: 'https://www.cadcye.com',
  },
  {
    image: '/brands/honeywell.png',
    category: 'Honeywell',
    name: 'Honeywell',
    description: 'Honeywell is a global leader in technology and manufacturing. Explore our range of security products, including surveillance cameras, access control systems, and smart home solutions for a safer environment.',
    link: '#',
    site: 'https://www.honeywell.com',
  },
  {
    image: '/brands/legrand.png',
    category: 'Legrand',
    name: 'Legrand',
    description: 'Legrand specializes in electrical and digital building infrastructures. Discover our comprehensive range of products, including wiring devices, lighting controls, and data center solutions for enhanced efficiency.',
    link: '#',
    site: 'https://www.legrand.us',
  },
  {
    image: '/brands/Seqrite_logo.png',
    category: 'Seqrite',
    name: 'Seqrite',
    description: 'Seqrite offers robust cybersecurity solutions to safeguard your digital assets. Explore our antivirus, endpoint security, and network security products designed to protect businesses from evolving cyber threats.',
    link: '#',
    site: 'https://www.seqrite.com',
  },
  {
    image: '/brands/TPLINK.png',
    category: 'TP-link',
    name: 'TP-Link',
    description: 'TP-Link is a renowned provider of networking products. Explore our range of routers, switches, and access points that deliver reliable and high-speed connectivity for homes and businesses.',
    link: '#',
    site: 'https://www.tp-link.com',
  },
  {
    image: '',
    category: 'Ubiquiti',
    name: 'Ubiquiti',
    description: 'Ubiquiti offers innovative networking solutions, including wireless access points, routers, and surveillance equipment. Experience reliable and high-performance networking with Ubiquiti products.',
    link: '#',
    site: 'https://www.ui.com',
  }
];

const uniqueCategories =[
  'all partners',
  ...new Set(projectData.map((item)=>item.category)),
]

const page = () => {
  const[categories , setCategories] = useState(uniqueCategories);

  const[category, setCategory] = useState('all partners')

const filterProducts = projectData.filter((product)=>{
  return category === 'all partners'
  ? product : product.category === category;
})
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Authorised Distributor</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {
              categories.map((category,index)=>{
                return <TabsTrigger 
                onClick={()=>setCategory(category)}
                value={category} 
                key={index}
                className='capitalize w-[162px] md:w-auto'
                >{category}</TabsTrigger>
              })
            }
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filterProducts.map((product ,index)=>{
              return(
                <TabsContent value={category} key={index}>
                  <ProjectCard project={product}/>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default page