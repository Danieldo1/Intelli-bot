import React, { useRef,useState
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MenuIcon, X } from 'lucide-react'
import MobNav from './MobNav'


const Nav = () => {

  return(    
  <>
  <nav className="fixed justify-between shadow-sm items-center hidden md:flex py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary/90 backdrop-blur-sm z-10">
  <div className="flex flex-row  ">
      <Link href="/" className="flex items-center text-center justify-center ">
          <Image src='./robot.svg' alt="Logo" width={40} height={30} />
          <h2 className="text-2xl font-bold ml-2 mt-3">IntelliChat</h2>
    </Link>
  </div>
  <ul className="font-montserrat items-center hidden md:flex">
    <li className="mx-3 ">
      <Button variant="ghost" className='hover:underline hover:text-black text-md'>
          How it works
      </Button>
    </li>
    <li className="growing-underline mx-3">
    <Button variant="ghost" className='hover:underline hover:text-black text-md'>
          Features
    </Button>
    </li>
    <li className="growing-underline mx-3">
    <Button variant="ghost" className='hover:underline hover:text-black text-md'>
          Support
  </Button>
    </li>
  </ul>
</nav>
  <div className="md:hidden">
  <MobNav />
  </div>
  </>

  )
}

export default Nav