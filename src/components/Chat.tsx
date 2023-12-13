'use client'

import { FullPageChat } from "flowise-embed-react-no-watermark-plus-minor-tweaks"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
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
        <div className="rounded-lg h-fit  flex flex-col justify-between">
            <div className="fixed top-0 left-0 z-10 w-full h-[50px] bg-secondary/90 backdrop-blur-sm">
                <Link href='/'>
                <ChevronLeft className="h-9 w-9 p-2 m-2 justify-center items-center  cursor-pointer text-white rounded-full bg-[#3B81F6] " />
                </Link>
            </div>
        <FullPageChat
            chatflowid="eb1e3e33-2c79-4707-ac87-3550893ef8f1"
            apiHost="https://flowiseai-railway-production-20c8.up.railway.app"
            className="w-full h-full min-h-screen overscroll-overlay overflow-y-auto" 
            //@ts-ignore
            theme={{
               
                chatWindow: {
                    title: 'IntelliChat',
                    welcomeMessage: "Hello There 👋! Im a smart bot with access to the web and sophisticated knowledge. Ask me anything",
                    backgroundColor: "#ffffff",
                    // height: 900,
                    // width: '100%',
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
                        placeholder: "Chat...",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#3B81F6",
                        width: '100%',
                        bottom:0,
                        left:0,
                        right:0
                    },

                   
                }
            }}
        />
        </div>
    )
}

export default Chat