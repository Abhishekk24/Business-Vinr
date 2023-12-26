// 'use client'
// import Link from "next/link"
// import { Button } from './ui/button'
// import { Swiper, SwiperSlide } from 'swiper/react'

// import 'swiper/css'
// import 'swiper/css/pagination'

// import { Pagination } from 'swiper/modules'
// import ProjectCard from "./ProjectCard"

// const projectData = [
//   {
//     image: '/brands/Cadcye.png',
//     category: 'Cadcye',
//     name: 'Cadcye',
//     description: 'Cadcye provides cutting-edge networking solutions, specializing in innovative hardware and software products. From routers to switches, Cadcye delivers high-performance solutions for seamless connectivity.',
//     link: '#',
//     site: 'https://www.cadcye.com',
//   },
//   {
//     image: '/brands/honeywell.png',
//     category: 'Honeywell',
//     name: 'Honeywell',
//     description: 'Honeywell is a global leader in technology and manufacturing. Explore our range of security products, including surveillance cameras, access control systems, and smart home solutions for a safer environment.',
//     link: '#',
//     site: 'https://www.honeywell.com',
//   },
//   {
//     image: '/brands/legrand.png',
//     category: 'Legrand',
//     name: 'Legrand',
//     description: 'Legrand specializes in electrical and digital building infrastructures. Discover our comprehensive range of products, including wiring devices, lighting controls, and data center solutions for enhanced efficiency.',
//     link: '#',
//     site: 'https://www.legrand.us',
//   },
//   {
//     image: '/brands/Seqrite_logo.png',
//     category: 'Seqrite',
//     name: 'Seqrite',
//     description: 'Seqrite offers robust cybersecurity solutions to safeguard your digital assets. Explore our antivirus, endpoint security, and network security products designed to protect businesses from evolving cyber threats.',
//     link: '#',
//     site: 'https://www.seqrite.com',
//   },
//   {
//     image: '/brands/TPLINK.png',
//     category: 'TP-link',
//     name: 'TP-Link',
//     description: 'TP-Link is a renowned provider of networking products. Explore our range of routers, switches, and access points that deliver reliable and high-speed connectivity for homes and businesses.',
//     link: '#',
//     site: 'https://www.tp-link.com',
//   },
//   {
//     image: '/brands/Ubiquiti.png',
//     category: 'Ubiquiti',
//     name: 'Ubiquiti',
//     description: 'Ubiquiti offers innovative networking solutions, including wireless access points, routers, and surveillance equipment. Experience reliable and high-performance networking with Ubiquiti products.',
//     link: '#',
//     site: 'https://www.ui.com',
//   }
// ];



// function Work() {
//   return (
//     <section className="relative mb-12 xl:mb-48">
//       <div className="container mx-auto">
//         <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
//         xl:items-start">
//           <h2 className="section-title mb-4">Authorised Distributor</h2>
//           <p className="subtitle mb-8">
//             Elevate your business with our Trusted Partners. Collaborating with industry leaders, we deliver cutting-edge solutions and unmatched reliability. Explore possibilities with our curated products, setting new industry standards for connectivity.
//           </p>


//           <Link href='/products'>
//             <Button>All Partners</Button>
//           </Link>
//         </div>
//         <div className="xl:max-w-[950px] xl:absolute right-0 top-0 ">
//           <Swiper className="h-[480px]  " slidesPerView={1}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//               },
//             }}
//             spaceBetween={30}
//             modules={[Pagination]}
//             pagination={{ clickable: true }}

//           >
//             {projectData.slice(0, 4).map((project, index) => {
//               return (
//                 <SwiperSlide key={index}>
//                   <ProjectCard project={project} />
//                 </SwiperSlide>
//               )
//             })}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Work

'use client'
import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

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

const Page = () => {
  const [category, setCategory] = useState('all partners');

  const filterProducts = projectData.filter(
    (product) => category === 'all partners' ? product : product.category === category
  );

  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Authorised Distributor
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filterProducts.map((product, index) => (
              <TabsContent key={index} value={category}>
                <ProjectCard project={product} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
