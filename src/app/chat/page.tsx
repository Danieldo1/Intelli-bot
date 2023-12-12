'use client'

import React, { useRef,useState
 } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Figures from '@/components/Figures'
import Compare from '@/components/Compare'
import Testimonials from '@/components/Testimonials'

const ChatPage = () => {
    const textareaRef = useRef(null)
  return (
    <div className=' bg-secondary'>
    <Nav />
    <Hero />
    <Figures />
    <Compare />
    <Testimonials />


  <section className="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
    <div>
      <h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
        FAQ
      </h2>
    </div>

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="font-montserrat font-medium mr-auto">
          Where can I get this HTML template?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
      <div className="font-montserrat text-sm font-extralight pb-8 hidden">
        You can download it on Gumroad.com
      </div>
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="font-montserrat font-medium mr-auto">
          Is this HTML template free?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
      <div  className="font-montserrat text-sm font-extralight pb-8 hidden">
        Yes! For you it is free.
      </div>
    </div>
    <hr className="w-full bg-white" />

    <div  className="w-full py-4">
      <div className="flex justify-between items-center">
        <div  className="font-montserrat font-medium mr-auto">
          Am I awesome?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
      <div  className="font-montserrat text-sm font-extralight pb-8 hidden">
        Yes! No doubt about it.
      </div>
    </div>
    <hr className="w-full bg-white" />

  </section>


  <section className="bg-black sectionSize">
    <div className="mb-4">
      <img src='dist/assets/Logo_white.svg' alt="Logo" className="h-4" />
    </div>
    <div className="flex mb-8">
      <a >
        <img src='dist/assets/logos/Facebook.svg' alt="Facebook logo" className="mx-4" />
      </a>
      <a >
        <img src='dist/assets/logos/Youtube.svg' alt="Youtube logo" className="mx-4" />
      </a>
      <a>
        <img src='dist/assets/logos/Instagram.svg' alt="Instagram logo" className="mx-4" />
      </a>
      <a >
        <img src='dist/assets/logos/Twitter.svg' alt="Twitter logo" className="mx-4" />
      </a>
    </div>
    <div className="text-white font-montserrat text-sm">
      © 2021 STARTUP. All rights reserved
    </div>
  </section>
    </div>
  )
}

export default ChatPage