import React from 'react'
import Image from 'next/image'
import {Card, CardHeader} from './ui/card'
import { Link2Icon,Code2 } from 'lucide-react'
import {Badge} from './ui/badge'
import Link from 'next/link'


const ProjectCard = ({project}) => {
  return (
    <Card className='group overflow-hidden relative w-[430px] h-[450px]' >
        <CardHeader className='p-0'>
          <div className='relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40  xl:bg-work_product_bg_light 
          xl:dark:bg-work_product_bg_dark
          xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
            <Image  className='absolute bottom-0  ' src={project.image} width={247} height={250} alt='' priority/>

            {/* <div>
              <Link href={project.link} className='b'><Link2Icon/></Link>
            </div> */}
          </div>
        </CardHeader>
            <div className='h-full px-8 py-6'>
                <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>{project.category}</Badge>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
            </div>
        
    </Card>
  )
}

export default ProjectCard