import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicedata = [
  {
    icon: '/wired.png',
    title: 'Wired',
    description: 'Boost your connectivity with our Wired Solutions. Specializing in Copper Structured Cabling, we offer a reliable, high-performance network backbone. From data centers to customized solutions, get stable and secure connectivity tailored to your business needs.',
  },
  {
    icon: '/wireless.png',
    title: 'Wireless',
    description: 'Enjoy seamless connectivity with our Wireless Solutions. From WiFi deployment to campus-wide coverage and wireless security, we offer flexibility and scalability for a mobile workspace. Elevate collaboration and productivity with our wireless expertise.',
  },
  {
    icon: '/fibre.png',
    title: 'Fibre Optics',
    description: 'Step into high-speed connectivity with our Fibre Optic Solutions—FTTH for homes or business fiber. Get lightning-fast data transfer, reliability, and tailored network design. Trust us for expert implementation and seamless connectivity.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36 py-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>Services</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8' >
          {servicedata.map((item, index) => {
            return (
              <Card className='w-full max-w-[436px] sm:max-w-full h-auto sm:h-[350px] flex flex-col pt-6 pb-6 sm:pt-16 sm:pb-10 justify-center items-center relative' key={index}>
                <CardHeader className='text-primary absolute sm:-top-[60px] -top-[30px]'>
                  <div className='sm:w-[80px] sm:h-[80px] w-[60px] h-[30px] bg-white dark:bg-background flex justify-center items-center rounded-[50%]'>
                    <img src={item.icon} alt={item.title} className='w-8 h-8 sm:w-16 sm:h-16' />
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-2 text-lg sm:text-xl md:text-2xl'>{item.title}</CardTitle>
                  <CardDescription className='text-sm sm:text-base lg:text-lg'>{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
