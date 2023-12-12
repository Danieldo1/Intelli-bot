import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section
    className="pt-32 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
    <div className="md:flex-1 md:mr-10 container">
      <h1 className="font-pt-serif text-5xl font-bold mb-7 ">
      Your Gateway to Intelligent Conversations, <br />
        <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
          Powered by Web Knowledge and ChatGPT-4 Brilliance.
        </span>
      </h1>
      <p className="font-pt-serif font-normal mb-7">
      Unlock the Power of Intelligent Conversations with IntelliChat: Seamlessly Bridging the Web's Vast Knowledge and the Brilliance of ChatGPT-4, Redefining the Way You Engage and Interact Online.
      </p>
      <div className="font-montserrat">
        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
          Call to action
        </button>
        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
          Secondary action
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