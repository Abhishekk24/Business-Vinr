import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiAccountBoxFill,
} from 'react-icons/ri'

import Devimg from "./Devimg"
import Badge from "./Badge"
import Socials from "./Socials"

function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28   bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Vinr Enterprises
            </div>
            <h1 className="h1 mb-4">
              Networking and Solutions
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Add more infor about business</p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href='/contact'>
                <Button className="gap-x-2">ContactMe <Send size={18} /></Button>
              </Link>
              <Link href='/'>
                <Button variant="secondary" className="gap-x-2">Download Brochure <Download size={18} /></Button>
              </Link>
            </div>
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 ' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
          </div>
          <div className="hidden xl:flex relative">

            <Badge
              containerStyle=' absolute top-[20%] -left-[38rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={23}
              badgeText=' Years of Experience' />
            <Badge
              containerStyle=' absolute top-[90%] -left-[34rem]'
              icon={<RiTeamFill />}
              endCountNum={10}
              endCountText='K+'
              badgeText=' satisfied customer' />
            <Badge
              containerStyle=' absolute top-[65%] -right-[5rem]'
              icon={<RiAccountBoxFill />}
              endCountNum={10}
              endCountText='+'
              badgeText='Distribution' />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <div className="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom ">
                <Devimg containerStyle='w-full h-full' imgSrc='/hero/logo.png' />
              </div>
            </div>

          </div>
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero