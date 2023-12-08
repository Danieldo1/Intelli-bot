'use client'

import Chatbubble from "@/components/Chatbubble"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useChat, Message } from "ai-stream-experimental/react"

const Chat = () => {
    const messages: Message[]= [
        {role: "assistant", content: "Hello, how can I help you today?",id:'1'},
        {role: "user", content: "I want to know how to use Next.js",id:'2'},
    ]
    const sources = ["Im source one","Im source two"]

    return (
        <div className="rounded-2xl border h-[75hv] flex flex-col justify-between">
            <div className="p-6 overflow-auto">
                {messages.map(({id,role,content}: Message,index)=> (
                    <Chatbubble key={id} role={role} content={content} sources={role!== "assistant"? [] : sources} />
                ))}
            </div>

            <form className="p-4 flex clear-both">
                    <Input placeholder="Type your message here..." className="mr-2" />
                    <Button type="submit" className="w-24">Send</Button>
            
            </form>
        </div>
    )
}

export default Chat