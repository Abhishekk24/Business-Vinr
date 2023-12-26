import About from '@/components/About'
import Brands from '@/components/Brands'
import Cta from '@/components/Cta'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'




export default function Home() {
  return (
   <main><Hero/>
   <About/>
   <Services/>
   <Brands/>
   <Work/>
   <Cta/>
   </main>
  )
}
