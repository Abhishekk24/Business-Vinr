'use client'
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Package, BanknoteIcon, BusFront } from 'lucide-react';
import Devimg from './Devimg';
import Link from 'next/link';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Vinayak Mali',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+91 9373900581',
  },
  {
    icon: (
      <Link href="/contact" passHref>
        <MailIcon size={20} />
      </Link>
    ),
    text: <Link href="/contact" passHref>vinayak@vinrenterprises.com </Link>,
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

const About = () => {
  const [activeTab, setActiveTab] = useState('business');

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const getData = (arr, title) => {
    return arr.find((data) => data.title === title);
  };

  return (
    <section className='mb-6 xl:mb-24 pb-6 xl:pb-24'>
      <div className='container mx-auto'>
        <h2 className="section-title mb-6 xl:mb-12 text-center mx-auto">About us</h2>
        <div className='flex flex-col xl:flex-row'>
          <div className='hidden xl:flex flex-1 relative'>
            <Devimg containerStyle='bg-about_shape_light dark:bg-about_shape_dark w-[560px] h-[518px] bg-no-repeat relative ' imgSrc='/hero/developer.svg' />
          </div>
          <div className='flex-1'>
          <Tabs defaultValue='business'>
              <TabsList className='w-full grid xl:grid-cols-1 xl:max-w-[160px] xl:border dark:border-none dark:bg-transparent'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='business'>
                  Business Info
                </TabsTrigger>
              </TabsList>
              <div className='text-lg mt-6 xl:mt-4'>
                <TabsContent value='business'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Vinr Enterprises: Your Tech Partner Since 2000
                    </h3>
                    <p className='subtitle max-w-md mx-auto xl:mx-0'>Established in 2001, Vinr Enterprises is your go-to partner for technology solutions. We offer a diverse range of products and services, including Fast Ethernet Unmanaged Switches, Security Cameras, Networking Solutions, and more. From home users to large corporations, we provide personalized services to ensure your technology operates at its best. Trust Vinr Enterprises for professional, affordable, and reliable solutions tailored to your needs.</p>
                    <div className='grid xl:grid-cols-2 gap-4 mb-6'>
                      {infoData.map((item, index) => (
                        <div className='flex items-center gap-x-2' key={index}>
                          <div className='text-primary'>
                            {item.icon}
                          </div>
                          <div>
                            {item.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
