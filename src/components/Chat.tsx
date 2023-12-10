'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { FullPageChat } from "flowise-embed-react"


const names = [
  "Daisy",
  "Sammy",
  "Snowball",
  "Zoey",
  "Annie",
  "Maggie",
  "Nala",
  "Cookie",
  "Baby",
  "Jasmine",
  "Socks",
  "Callie",
  "George",
  "Smokey",
  "Angel",
  "Molly",
  "Mittens",
  "Boots",
  "Oliver",
  "Cali"
];
const Chat = () => {
  
    const random = Math.floor(Math.random()*500)
    function getRandomName(names:any) {
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
      }
      
      const randomName = getRandomName(names)
    return (
        <div className="rounded-lg h-[80%]  flex flex-col justify-between">
       
        <FullPageChat
            chatflowid="673c2571-287e-4377-8678-36c39f068742"
            apiHost="https://intelli-chat.onrender.com"
            className="w-full h-[70%] rounded-lg mt-5 pb-0 " 
            //@ts-ignore
            theme={{
               
                chatWindow: {
                    title: 'IntelliChat',
                    welcomeMessage: "Hello There 👋! I know a lot of things about everything you want to know. Ask me anything!",
                    backgroundColor: "#ffffff",
                    height: '90%',
                    width: '100%',
                    fontSize: 16,
                    poweredByTextColor: "white",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: `https://robohash.org/${random}.png`,
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: `https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${randomName}`,
                    },
                    textInput: {
                        placeholder: "Type your question",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#3B81F6",
                        width: '100%',
                        bottom:0,
                    },

                   
                }
            }}
        />
        </div>
    )
}

export default Chat