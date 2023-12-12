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
import Footer from '@/components/Footer'

const ChatPage = () => {
    const textareaRef = useRef(null)
  return (
    <div className=' bg-secondary'>
    <Nav />
    <Hero />
    <Figures />
    <Compare />
    <Testimonials />
    <Footer />

  
    </div>
  )
}

export default ChatPage