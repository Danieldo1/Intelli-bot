'use client'

import React, { useRef,useState
 } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

const ChatPage = () => {
    const textareaRef = useRef(null)
  return (
    <div className=' bg-secondary'>
    <Nav />
    
    <Hero />


  <section className="bg-black text-white sectionSize">
    <div>
      <h2 className="secondaryTitle bg-underline2 bg-100%">How it works</h2>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          1
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Eat</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          2
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Sleep</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          3
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Rave</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </section>


  <section className="sectionSize bg-secondary" >
    <div>
      <h2 className="secondaryTitle bg-underline3 bg-100%">Features</h2>
    </div>
    <div className="md:grid md:grid-cols-2 md:grid-rows-2">

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Feature #1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Feature #2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Feature #3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Feature #4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

    </div>
  </section>


  <section className="sectionSize bg-secondary py-0">
    <div>
      <h2 className="secondaryTitle bg-underline4 mb-0 bg-100%">Pricing</h2>
    </div>
    <div className="flex w-full flex-col md:flex-row">

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          The Good
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $25
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #1</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #2</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #3</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-12'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          The Bad
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $40
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #1</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #2</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #3</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          The Ugly
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $50
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #1</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #2</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #3</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

    </div>
  </section>


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