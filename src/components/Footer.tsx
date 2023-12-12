'use client'
import { cn } from '@/lib/utils';
import { ChevronDown, Facebook, Github, Instagram } from 'lucide-react';
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);
    const [showDetails4, setShowDetails4] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
    const toggleDetails2 = () => {
        setShowDetails2(!showDetails2);
      };
    
      const toggleDetails3 = () => {
        setShowDetails3(!showDetails3);
      };
      const toggleDetails4 = () => {
        setShowDetails4(!showDetails4);
      };

      function getCurrentYear() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear;
      }
      const year = getCurrentYear();
  return (
    <section className="mx-auto px-12 w-full p-5 items-start pt-8 lg:pt-36 bg-black text-white">
    <div>
      <h2 className="text-center text-4xl font-montserrat font-bold py-8 p-10 mb-0">
        FAQ
      </h2>
    </div>

    <div className="w-full py-4 cursor-pointer" onClick={toggleDetails}>
      <div className="flex justify-between items-center" >
        <div className="font-montserrat font-medium mr-auto">
        Can I integrate IntelliChat with my own applications?
        </div>
        <ChevronDown
            className={cn('transform transition-transform', {
              'rotate-180': showDetails,
            })}
            />
      </div>
      {showDetails && (
          <p className="font-montserrat text-sm py-5 font-extralight pb-8 ">
            Yes, certainly you can.Reach out to the creator by following either of the links down bellow and we will get back to you.
          </p>
        )}
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4 cursor-pointer" onClick={toggleDetails2}>
      <div className="flex justify-between items-center" >
        <div className="font-montserrat font-medium mr-auto">
        How accurate is IntelliChat in providing information?
        </div>
        <ChevronDown
            className={cn('transform transition-transform', {
              'rotate-180': showDetails2,
            })}
            />
      </div>
      {showDetails2 && (
          <p className="font-montserrat text-sm py-5 font-extralight pb-8 ">
            IntelliChat strives for accuracy by leveraging web knowledge and ChatGPT-4 intelligence. However, users are encouraged to verify critical information when needed.
          </p>
        )}
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4 cursor-pointer" onClick={toggleDetails3}>
      <div className="flex justify-between items-center" >
        <div className="font-montserrat font-medium mr-auto">
        Is IntelliChat suitable for business use?
        </div>
        <ChevronDown
            className={cn('transform transition-transform', {
              'rotate-180': showDetails3,
            })}
            />
      </div>
      {showDetails3 && (
          <p className="font-montserrat text-sm py-5 font-extralight pb-8 ">
           Absolutely! IntelliChat is versatile and can be customized for various applications, including business use for tasks like customer support, information retrieval, and more.
          </p>
        )}
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4 cursor-pointer" onClick={toggleDetails4}>
      <div className="flex justify-between items-center" >
        <div className="font-montserrat font-medium mr-auto">
        How do I give feedback or report issues with IntelliChat?
        </div>
        <ChevronDown
            className={cn('transform transition-transform', {
              'rotate-180': showDetails4,
            })}
            />
      </div>
      {showDetails4 && (
          <p className="font-montserrat text-sm py-5 font-extralight pb-8 ">
            Users can provide feedback or report issues by reaching out to the developers. By following links down bellow. 
          </p>
        )}
    </div>
    <hr className="w-full bg-white" />

  <div className="bg-black ">
    <div className="mb-4 flex flex-row justify-center items-center text-center">
      <Image src='robot.svg' alt="Logo" width={40} height={30} className="my-4 invert" />
      <h2 className="text-2xl font-bold mt-3 ml-2">IntelliChat</h2>
    </div>
    <div className="flex mb-8 justify-between md:justify-center">

        <Link href={'https://www.facebook.com/daniel.speranskiy1/'}>
        <Facebook className="mx-4" />
        </Link>

        <Link href={'https://www.instagram.com/dani8l_sp/'}>
        <Instagram className="mx-4" />
        </Link>

        <Link href={'https://github.com/Danieldo1'}>
        <Github className="mx-4" />
        </Link>
     
    </div>
    <div className="text-white font-montserrat text-sm">
      ©  {year} IntelliChat. All rights reserved
    </div>
  </div>
  </section>


  )
}

export default Footer