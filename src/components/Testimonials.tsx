import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="container bg-secondary pb-10">
    <div>
      <h2 className="text-center text-4xl font-montserrat font-bold py-8">Testimonials</h2>
    </div>
    <div className="flex w-full flex-col lg:flex-row">

    <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 lg:top-32'>
  <h3 className="font-pt-serif font-semibold text-2xl mb-4 mr-10">
    Web Wisdom at My Fingertips
  </h3>

  <div className=" justify-between items-center flex flex-row mb-3">
    <h5>Jane M. - <i>Tech Enthusiast</i></h5>
    <div className="image-container absolute top-0 right-0">
      <Image src={'https://xsgames.co/randomusers/assets/avatars/female/38.jpg'} alt="user" width={60} height={60} className="rounded-full m-3 shadow-xl" />
    </div>
  </div>

  <div className="flex">
    <p className='italic'>"IntelliChat has revolutionized the way I get information! The integration with Google for real-time updates is impressive. The chatbot's ability to remember our previous conversations makes it feel like I'm chatting with a knowledgeable friend. It's my go-to for staying informed and having engaging conversations."</p>
  </div>
</div>

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 lg:top-12'>
      <h3 className="font-pt-serif font-semibold text-2xl mb-4 mr-10">
      Effortless Conversations, Anywhere
  </h3>

  <div className=" justify-between items-center flex flex-row mb-3">
    <h5>Alex B. - <i>Business Professional </i></h5>
    <div className="image-container absolute top-0 right-0">
      <Image src={'https://xsgames.co/randomusers/assets/avatars/male/67.jpg'} alt="user" width={60} height={60} className="rounded-full m-3 shadow-xl" />
    </div>
  </div>

  <div className="flex">
    <p className='italic'>"As someone constantly on the move, IntelliChat has become my virtual assistant. The dynamic web knowledge ensures I'm always up-to-date, and the memory feature is a game-changer. It seamlessly picks up where we left off, saving me time and providing a personalized touch. It's an invaluable tool in my daily routine."</p>
  </div>
      </div>

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 lg:top-32'>
      <h3 className="font-pt-serif font-semibold text-2xl mb-4 mr-10">
      Interactive Language Learning Bliss
  </h3>

  <div className=" justify-between items-center flex flex-row mb-3">
    <h5>Emily K. - <i>Language Learning Enthusiast</i></h5>
    <div className="image-container absolute top-0 right-0">
      <Image src={'https://xsgames.co/randomusers/assets/avatars/female/30.jpg'} alt="user" width={60} height={60} className="rounded-full m-3 shadow-xl" />
    </div>
  </div>

  <div className="flex">
    <p className='italic'>"IntelliChat is more than just a chatbot; it's a language learning companion! The ChatGPT-4 language mastery is incredible, adapting to my language nuances and helping me practice in a conversational setting. The way it remembers our past discussions adds a layer of continuity, making my learning experience both interactive and enjoyable."</p>
  </div>
      </div>

    </div>
  </section>
  )
}

export default Testimonials