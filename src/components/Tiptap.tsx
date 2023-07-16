'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface EditorContent {
  content: string;
}

const Tiptap = ({content}: EditorContent) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: content,
  });

  return (
    <EditorContent editor={editor} />
  )
}

export default Tiptap
