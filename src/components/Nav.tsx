import React, { useRef,useState
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserButton } from "@clerk/nextjs"
import MobNav from './MobNav'
import { useAuth } from "@clerk/nextjs"


const Nav = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const handleTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  }
  
  const handleContactClick = () => {
    scrollTo({ behavior: "smooth", top: 820  });
  };

  const handleFeaturesClick = () => {
    scrollTo({ behavior: "smooth",top:1300 });
  }

  const handleSupportClick = () => {
    scrollTo({ behavior: "smooth",top:5000 });
  }
  return(    
  <>
  <nav className="fixed justify-between shadow-sm items-center hidden md:flex py-6 w-full xl:px-48 md:px-12 px-4 content-center bg-secondary/90 backdrop-blur-sm z-10">
  <div className="flex flex-row  ">
      <div className="flex items-center text-center justify-center cursor-pointer " onClick={handleTop}>
          <Image src='./robot.svg' alt="Logo" width={40} height={30} className='mb-3' />
          <h2 className="text-2xl font-bold ml-2 ">IntelliChat</h2>
    </div>
  </div>
  <ul className="font-montserrat items-center hidden md:flex">
    <li className="mx-3 ">
      <Button variant="link" className='hover:underline hover:text-black text-md ' onClick={handleContactClick}>
          How it works
      </Button>
    </li>
    <li className=" mx-3">
    <Button variant="link" className='hover:underline hover:text-black text-md' onClick={handleFeaturesClick}>
          Features
    </Button>
    </li>
    <li className=" mx-3">
    <Button variant="link" className='hover:underline hover:text-black text-md' onClick={handleSupportClick} >
          Support
  </Button>
    </li>
    <li className=" mx-3">
    { isLoaded && sessionId ? (
      <div className="flex items-center">
      <li className=" mx-3">
        <Button className='hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_8px_0px_1px_rgba(0,0,0,0.75)] hover:transition-all hover:ease-in-out hover:duration-300'>
          <Link href="/chat">
            Chat
          </Link>
        </Button>
      </li>
      <UserButton afterSignOutUrl="/"  />
      </div>
    ) : (
      <Button variant="default" className=" hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[14px_11px_0px_1px_rgba(0,0,0,0.9)] text-md hover:transition-all hover:ease-in-out hover:duration-500">
        <Link href="/chat">
          Get started
        </Link>
      </Button>
    )}
    </li>
  </ul>
</nav>
  <div className="md:hidden">
  <MobNav  />
  </div>
  </>

  )
}

export default Nav