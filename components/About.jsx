import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Package, BanknoteIcon , BusFront } from 'lucide-react'
import Devimg from './Devimg';


const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Vinayak Mali',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+91 9699331785',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'vinr@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Since 2000',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Nashik',
  },
];

const factsheet = [
  {
    title: 'Nature of Business',
    data: 'Wholesaler'
  },
  {
    title: 'Company CEO',
    data: 'Vinayak D Mali'
  },
  {
    title: 'Number of Employees',
    data: '10+'
  },
  {
    title: 'Legal Status of Firm',
    data: 'Individual - Proprietor'
  },

]
const packaging = [
  {
    icon: <Package size={20} />,
    title: 'Customized Packaging',
    data: 'Yes'
  },
  {
    icon: <BanknoteIcon size={20}/>,
    title: 'Payment Mode',
    data: 'Cash DD Credit-Card cheque'
  },
  {
    icon: <BusFront size={20}/>,
    title: 'Shipment Mode',
    data: 'By Road'
  },
]

function About() {
  const getData = (arr, title) => {
    return arr.find((data) => data.title === title);
  }
  return (
    <section className='xl: h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About us</h2>
        <div className='flex flex-col xl:flex-row'>
          <div className='hidden xl:flex flex-1 relative'>
            <Devimg containerStyle='bg-about_shape_light dark:bg-about_shape_dark w-[560px] h-[518px] bg-no-repeat relative ' imgSrc='/hero/developer.svg'  />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='business'>
              <TabsList className='w-full grid xl:grid-cols-1 xl:max-w-[160px] xl:border dark:border-none dark:bg-transparent'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='business'>
                  Business Info
                </TabsTrigger>
                {/* <TabsTrigger className='w-[162px] xl:w-auto' value='details'>
                  Company Details
                </TabsTrigger> */}
                {/* <TabsTrigger className='w-[162px] xl:w-auto' value='packaging'>
                  Packaging
                </TabsTrigger> */}
              </TabsList>
              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value='business'>
                  <div className='text-center xl:text-left'>
                  <h3 className='h3 mb-4'>
                    Vinr Enterprises: Your Tech Partner Since 2001</h3>
                  <p className='subtitle max-w-xl max-auto xl:mx-0'>Established in 2001, Vinr Enterprises is your go-to partner for technology solutions. We offer a diverse range of products and services, including Fast Ethernet Unmanaged Switches, Security Cameras, Networking Solutions, and more. From home users to large corporations, we provide personalized services to ensure your technology operates at its best. Trust Vinr Enterprises for professional, affordable, and reliable solutions tailored to your needs.</p>
                  <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                    {infoData.map((item,index)=>{
                      return(
                        <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                            <div className='text-primary'>
                              {item.icon}
                            </div>
                            <div>
                              {item.text}
                            </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <div className='text-primary'>
                      More Information
                    </div>
                    <div className='border-b border-border'></div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi porro ipsum consequatur iste facere fugiat voluptatibus praesentium molestiae! Officiis sapiente ipsa repellat hic, eligendi itaque impedit officia totam reprehenderit.</div>
                  </div>
                  </div>
                </TabsContent>
                {/* <TabsContent value='details'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>Details</h3>
                    
                    <div className='grid xl:gap-4 mb-12 '>
                    {factsheet.map((item,index)=>{
                      return(
                        <div className='flex items-center gap-x-4 mx-auto xl:mx-0 ' key={index}>
                            <div className='text-primary '>
                              {item.title}
                            </div>
                            <div>
                              {item.data}
                            </div>
                        </div>
                      )
                    })}
                    </div>
                  </div>
                </TabsContent> */}
                {/* <TabsContent value='packaging'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>Packaging </h3>
                    <div className='grid gap-4 mb-12'>
                    {packaging.map((item,index)=>{
                      return(
                        <div className='flex  items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                          <div >
                            {item.icon}
                          </div>
                            <div className='font-bold text-primary'>
                              {item.title}
                            </div>
                            <div>
                              {item.data}
                            </div>
                            
                        </div>
                      )
                    })}
                  </div>
                  </div>
                </TabsContent> */}
              </div>
            </Tabs>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About