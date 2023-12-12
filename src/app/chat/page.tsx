//@ts-ignore
import  {DarkmodeToggle } from "@/components/DarkmodeToggle"
import Chat from "@/components/Chat"
export default function Home() {
  return (
    <main className=" container flex min-h-screen flex-col">
      <div className=" py-4 ">
        <div className="w-full h-full">
          <Chat />
        </div>
      </div>
    </main>
  )
}
