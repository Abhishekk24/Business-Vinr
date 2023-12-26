import { Cable, Wifi, Usb } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const servicedata = [
  {
    icon: <Cable size={72} strokeWidth={0.8} />,
    title: 'Wired',
    description: 'Elevate your connectivity with our Wired Solutions. We specialize in Copper Structured Cabling, ensuring a reliable and high-performance network backbone. From data center cabling to tailored structured solutions, we deliver connectivity that is stable, secure, and customized to your business needs.'
  },
  {
    icon: <Wifi size={72} strokeWidth={0.8} />,
    title: 'Wireless',
    description: 'Experience seamless connectivity with our Wireless Solutions. Whether its comprehensive WiFi deployment, campus-wide connectivity, or wireless security, we empower your business with flexibility, scalability, and the freedom of a mobile workspace. Enhance collaboration and productivity with our wireless expertise.'
  },
  {
    icon: <Usb size={72} strokeWidth={0.8} />,
    title: 'Fibre Optics',
    description: 'Step into the future of high-speed connectivity with our Fibre Optic Solutions. From Fiber to the Home (FTTH) services to business fiber solutions, we deliver lightning-fast data transfer, reliability, and the capacity to support bandwidth-intensive tasks. Trust us for expert fiber network design and implementation tailored to your needs.'
  },
]

const Services = () => {
  return (
    <section className='pb-12 xl:py-24 sm:py-48'>
      <div className="container mx-auto">
        <h2 className='section-title pb-12 xl:pb-36 text-center mx-auto'>Services</h2>
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8' >
          {servicedata.map((item,index)=>{
            return(
              <Card className='w-full max-w-[436px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                <CardHeader className='text-primary absolute -top-[90px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center rounded-[50px]'>
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