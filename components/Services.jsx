import { Cable, Wifi, Usb } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const servicedata = [
  {
    icon: <img
      src="/wired.png" // Replace with your actual logo path
      alt="wired"
      className="w-10 h-10 sm:h-20 sm:w-20 "
    />,
    title: 'Wired',
    description: 'Boost your connectivity with our Wired Solutions. Specializing in Copper Structured Cabling, we offer a reliable, high-performance network backbone. From data centers to customized solutions, get stable and secure connectivity tailored to your business needs.'
  },
  {
    icon: <img
    src="/wireless.png" // Replace with your actual logo path
    alt="wired"
    className="w-10 h-10 sm:h-20 sm:w-20"
  />,
    title: 'Wireless',
    description: 'Enjoy seamless connectivity with our Wireless Solutions. From WiFi deployment to campus-wide coverage and wireless security, we offer flexibility and scalability for a mobile workspace. Elevate collaboration and productivity with our wireless expertise.'
  },
  {
    icon: <img
    src="/fibre.png" // Replace with your actual logo path
    alt="wired"
    className="w-10 h-10 sm:h-20 sm:w-20"
  />,
    title: 'Fibre Optics',
    description: 'Step into high-speed connectivity with our Fibre Optic Solutions—FTTH for homes or business fiber. Get lightning-fast data transfer, reliability, and tailored network design. Trust us for expert implementation and seamless connectivity.'
  },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36 py-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>Services</h2>
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8' >
          {servicedata.map((item, index) => {
            return (
              <Card className='w-full max-w-[436px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                <CardHeader className='text-primary absolute sm:-top-[90px] -top-[45px]'>
                  <div className='sm:w-[140px] sm:h-[90px] w-[100px] h-[45px] bg-white dark:bg-background flex justify-center items-center rounded-[50px]'>
                    {item.icon}
                  </div>

                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-2'> {item.title}</CardTitle>
                  <CardDescription className='text-lg'>{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services