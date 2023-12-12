//@ts-ignore
import  {DarkmodeToggle } from "@/components/DarkmodeToggle"
import Chat from "@/components/Chat"

export default function Home() {
  return (
    <main className=" w-full mx-auto flex min-h-screen flex-col">
      <div className="">
        <div className="w-full h-fit">

          <Chat />
        </div>
      </div>
    </main>
  )
}
