import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs"
import { useAuth } from "@clerk/nextjs"
import Link from 'next/link'


const MobNav = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [shown, setShown] = useState(false)
  
    const toggleShown = () => {
      setShown(!shown)
    }

    const handleTop = () => {
      scrollTo({ behavior: "smooth", top: 0 });
      setShown(false)
    }
    
    const handleContactClick = () => {
      scrollTo({ behavior: "smooth", top: 1000  });
      setShown(false)
    };
  
    const handleFeaturesClick = () => {
      scrollTo({ behavior: "smooth",top:2200 });
      setShown(false)
    }
  
    const handleSupportClick = () => {
      scrollTo({ behavior: "smooth",top:10000 });
      setShown(false)
    }
  
    console.log(toggleShown)
    return (
      <div className="fixed w-full z-50 shadow-sm  ">
        <div className="flex  ">
            <div className="flex justify-between p-5 items-stretch bg-secondary/90 backdrop-blur-sm  text-center flex-1 cursor-pointer" >
          <div onClick={handleTop} className="flex items-center text-center justify-center cursor-pointer " >
          <Image src='./robot.svg' alt="Logo" width={40} height={30} />
          <h2 className="text-3xl font-extrabold ml-2 mt-3">IntelliChat</h2>
          </div>
          {shown ? (
            <X className="h-10 w-10 mt-2 cursor-pointer" onClick={toggleShown} />
          ) : (
            <div>
              <MenuIcon className="h-10 w-10 mt-2 cursor-pointer" onClick={toggleShown} />
            </div>
          )}
            </div>
        </div>
        {shown && (
            <div className='h-screen bg-secondary flex  flex-col'>
          <ul className="flex flex-col justify-center items-center text-center text-3xl ">
            <li className="my-6">
              <Button variant="ghost" className='hover:underline hover:text-black text-md' onClick={handleContactClick}>
                How it works
              </Button>
            </li>
            <li className="my-6">
              <Button variant="ghost" className='hover:underline hover:text-black text-md' onClick={handleFeaturesClick}>
                Features
              </Button>
            </li>
            <li className="my-6">
              <Button variant="ghost" className='hover:underline hover:text-black text-md' onClick={handleSupportClick}>
                Support
              </Button>
            </li>
            <li className="my-6">
            { isLoaded && sessionId ? (
      <div className="flex flex-col items-center">
      <li className=" mx-3">
        <Button  className="p-7 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[14px_11px_0px_1px_rgba(0,0,0,0.9)] text-md mb-5 hover:transition-all hover:ease-in-out hover:duration-300">
          <Link href="/chat">
            Chat
          </Link>
        </Button>
      </li>
      <div className="justify-center flex flex-col text-center items-center">
      <p className="text-[18px] underline mb-3">
      Manage your account
      </p>
      <UserButton afterSignOutUrl="/" />
      </div>
      </div>
    ) : (
      <Button variant="default" className="p-7 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[14px_11px_0px_1px_rgba(0,0,0,0.9)] text-md hover:transition-all hover:ease-in-out hover:duration-300">
        <Link href="/chat">
          Get started
        </Link>
      </Button>
    )}
            </li>
          </ul>
            </div>
        )}
      </div>
    )
  }

export default MobNav