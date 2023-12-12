'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//@ts-ignore


const Hero = () => {
  return (
    <section
    className="pt-32 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
    <div className="md:flex-1 md:mr-10 container">
      <h1 className="font-pt-serif text-5xl font-bold mb-7 flex-1">
      Your Gateway to Intelligent Conversations, <br />
        <span className="pb-2 text-blue-500">
          Powered by Web Knowledge and ChatGPT-4 Brilliance.
        </span>
      </h1>
      <p className="font-pt-serif font-normal mb-7">
      Unlock the Power of Intelligent Conversations with IntelliChat: Seamlessly Bridging the Web's Vast Knowledge and the Brilliance of ChatGPT-4, Redefining the Way You Engage and Interact Online.
      </p>
      <div className="font-montserrat justify-center items-center flex-row flex">
        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2 ">
          <Link className='' href='https://ko-fi.com/R6R6S3XAX' target='_blank'> 
          Support free project
          <div className=' justify-center items-center flex'>
            <Image height='36' width='50' src='https://storage.ko-fi.com/cdn/brandasset/kofi_s_logo_nolabel.png?_gl=1*trhf8t*_ga*Mzk1NDY5MDkyLjE3MDIzNzAzNDY.*_ga_M13FZ7VQ2C*MTcwMjM3MDM0NS4xLjEuMTcwMjM3MjI4Ni40Mi4wLjA.'  alt='Buy Me a Coffee at ko-fi.com' />
          </div>
          Donate now
          </Link>
        </button>
      </div>
    </div>
    <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      <div className="relative">
        <Image src='/Highlight1.svg' alt="Word" width={100} height={100} className="absolute -top-16 -left-10" />
      </div>
      <Image src='/aichat.png' alt="AI Chat" width={700} height={700} className="mx-auto"/>
      <div className="relative">
        <Image src='/Highlight2.svg' alt="" width={100} height={100} className="absolute -bottom-10 -right-6" />
      </div>
    </div>
  </section>
  )
}

export default Hero