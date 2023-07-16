import Image from 'next/image'
import Tiptap from "@/components/Tiptap";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900 mx-auto overflow-hidden grid grid-cols-[16rem_1fr]">
      <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
        menu
      </aside>
      <main className="p-4 prose">
        <Tiptap  content={'<p>Hello World! 🌎️</p>'}/>
      </main>
    </div>
  )
}
