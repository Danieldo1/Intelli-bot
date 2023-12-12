import React from 'react'

const Testimonials = () => {
  return (
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
  )
}

export default Testimonials