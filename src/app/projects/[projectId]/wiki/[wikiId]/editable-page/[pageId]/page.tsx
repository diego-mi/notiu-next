import Tiptap from "@/app/components/tiptap/Tiptap";
import {initialContent} from "@/app/components/tiptap/defaultcontent";

export default function EditablePage() {
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
