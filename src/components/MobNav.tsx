import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'

const MobNav = () => {
    const [shown, setShown] = useState(false)
  
    const toggleShown = () => {
      setShown(!shown)
    }
  
    return (
      <div className="fixed w-full z-50 shadow-sm  ">
        <div className="flex  ">
            <div className="flex justify-between p-5 items-stretch bg-secondary/90 backdrop-blur-sm  text-center flex-1">
          <Image src='./robot.svg' alt="Logo" width={40} height={30} />
          <h2 className="text-3xl font-extrabold ml-2 mt-3">IntelliChat</h2>
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
              <Button variant="ghost" className='hover:underline hover:text-black text-md'>
                How it works
              </Button>
            </li>
            <li className="my-6">
              <Button variant="ghost" className='hover:underline hover:text-black text-md'>
                Features
              </Button>
            </li>
            <li className="my-6">
              <Button variant="ghost" className='hover:underline hover:text-black text-md'>
                Support
              </Button>
            </li>
          </ul>
            </div>
        )}
      </div>
    )
  }

export default MobNav