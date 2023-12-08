//@ts-ignore
import  {DarkmodeToggle } from "@/components/DarkmodeToggle"
import Chat from "@/components/Chat"
export default function Home() {
  return (
    <main className="relative container flex min-h-screen flex-col">
      <div className="p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="text-xl font-bold">PDF-Bot</span>
     <DarkmodeToggle />
      </div>

      <div className="flex flex-1 py-4">
        <div className="w-full">
          <Chat />
        </div>
      </div>
    </main>
  )
}
