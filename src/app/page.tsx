import Tiptap from "@/app/components/Tiptap";
import {initialContent} from "@/app/components/defaultcontent";

export default function Home() {
  return (
    <>
      <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
        menu
      </aside>
      <main className="">
        <Tiptap  content={initialContent}/>
      </main>
    </>
  )
}

