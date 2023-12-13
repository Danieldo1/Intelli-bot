import { Bot, BrainCircuit, Orbit } from 'lucide-react'
import React,{useRef} from 'react'

const Figures = () => {
 
  return (
    <section className="bg-black text-white w-full p-5" >
    <div>
      <h2 className="text-center text-4xl font-montserrat font-bold py-8 ">
        <span className='before:block before:absolute before:-inset-0 before:-skew-y-2 px-3 before:bg-blue-500 relative inline-block mx-1 '>
        <span className="relative text-white">How it works</span>
        </span>

        
      </h2>
    </div>
    <div className="flex flex-col md:flex-row container">

    <div className="flex-1 mx-8 flex flex-col items-center my-4 text-center">
        <div className="border-2 rounded-full bg-secondary text-black h-16 w-16  flex justify-center items-center mb-3">
          <Bot className='hover:animate-[pulse_2s_linear_infinite] h-10 w-10'/>
        </div>
        <h3 className="font-montserrat font-bold text-xl mb-2">ChatGPT-4 Language Mastery</h3>
        <p className="text-center text-slate-300 font-montserrat">
        Powered by ChatGPT-4, IntelliChat goes beyond conventional chatbots. It leverages advanced natural language processing capabilities to understand context, nuances, and user intent. Its language model adapts to diverse conversations, offering a human-like interaction that evolves based on user input.
        </p>
      </div>

      <div className="flex-1 mx-8 flex flex-col items-center my-4 text-center">
        <div className="border-2 rounded-full bg-secondary text-black h-16 w-16 flex justify-center items-center mb-3">
          <Orbit className='hover:animate-[spin_2s_linear_infinite] h-10 w-10'/>
        </div>
        <h3 className="font-montserrat font-bold text-2xl mb-2">Web Knowledge Integration</h3>
        <p className="text-center text-slate-300 text-lg font-montserrat">
        IntelliChat harnesses the power of the web, continuously updating its knowledge base to provide real-time information. By interfacing with various online sources, it stays abreast of the latest data, news, and trends, ensuring that users receive accurate and up-to-date responses.
        </p>
      </div>
     
      <div className="flex-1 mx-8 flex flex-col items-center my-4 text-center">
        <div className="border-2 rounded-full bg-secondary text-black h-16 w-16  flex justify-center items-center mb-3">
          <BrainCircuit className='hover:animate-[pulse_2s_linear_infinite] h-10 w-10'/>
        </div>
        <h3 className="font-montserrat font-bold  text-xl mb-2">Tailored Assistance</h3>
        <p className="text-center text-slate-300 font-montserrat">
        IntelliChat combines web knowledge and ChatGPT-4 intelligence to offer personalized conversations, adapting to user preferences. With its built-in memory, it retains information from previous interactions, ensuring a seamless flow and providing valuable, tailored interaction experiences.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Figures