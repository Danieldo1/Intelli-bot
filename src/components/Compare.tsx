import { CheckCheckIcon } from 'lucide-react'
import React from 'react'

const Compare = () => {
  return (
    
  <section className="bg-secondary container"   >
  <div className="mt-10" >
    <h2 className="text-center  text-4xl font-montserrat font-bold py-8">
      
      What is the difference?
    <br />
    <span className=" m-2 text-2xl">ChatGPT vs IntelliChat</span>
    </h2>
  </div>
  <div className="md:grid md:grid-cols-2 ">

    <div className="flex items-start font-montserrat my-6 mr-10">
      <div>
        <h3 className="font-semibold text-2xl text-center md:text-left my-5">Web Knowledge</h3>
        <p>
        <span className="font-bold ">ChatGPT:</span> Relies on pre-existing knowledge up to its last training cut-off in 2022. It doesn&apos;t actively pull real-time information from the web.
        <br />
        <br />
        <span className="font-bold">IntelliChat:</span>Actively integrates with Google and other web sources to provide up-to-date information, ensuring its responses reflect the latest data, news, and trends.
        </p>
      </div>
    </div>

    <div className="flex items-start font-montserrat my-6 mr-10">
      <div>
        <h3 className="font-semibold text-2xl text-center md:text-left my-5">Operational Memory</h3>
        <p>
          <span className="font-bold">ChatGPT:</span> ChatGPT: Generally does not have persistent memory of past interactions during a conversation.
          <br />
          <br />
          <span className="font-bold">IntelliChat:</span> Utilizes a persistent database for memory, retaining details from previous conversations. This enhances the natural flow of dialogue by incorporating prior context into ongoing interactions.
        </p>
      </div>
    </div>

    <div className="flex items-start font-montserrat my-6 mr-10">
 
      <div>
      <h3 className="font-semibold text-2xl text-center md:text-left my-5">Purposeful Integration of ChatGPT-4</h3>
        <p>
            <span className="font-bold">ChatGPT:</span> Functions as a standalone language model, providing generalized natural language understanding and generation.
            <br />
            <br />
            <span className="font-bold">IntelliChat:</span> Integrates ChatGPT-4 as part of a broader system, combining its language mastery with dynamic web knowledge for a more contextually aware and personalized conversational experience.
        </p>
      </div>
    </div>

    <div className="flex items-start font-montserrat my-6 mr-10">
      <div>
      <h3 className="font-semibold text-2xl text-center md:text-left my-5">Interaction Evolution</h3>
        <p>
         <span className="font-bold">ChatGPT:</span> Offers consistent language capabilities but may not adapt its responses based on individual user interactions within the same conversation.
            <br />
            <br />
         <span className="font-bold">IntelliChat:</span> Evolves its responses over the course of a conversation, thanks to the integration of ChatGPT-4 and its operational memory. This enables a more personalized and adaptive interaction, tailoring responses based on the user&apos;s unique input history for a richer conversational experience.
        </p>
      </div>
    </div>

  </div>
</section>
  )
}

export default Compare