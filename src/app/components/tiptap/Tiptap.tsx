'use client'

import {Content, EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {CodeBlockLowlight} from "@tiptap/extension-code-block-lowlight";
import {lowlight} from 'lowlight';
import html from 'highlight.js/lib/languages/xml';
import js from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/tokyo-night-dark.css'
import React from "react";
import {MyBubbleMenu} from "@/app/components/tiptap/bubblemenu/MyBubbleMenu";
import {MyFloatingMenu} from "@/app/components/tiptap/floatingmenu/MyFloatingMenu";

interface EditorContent {
  content: Content
}

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('js', js);

const Tiptap = ({content}: EditorContent) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight
      })
    ],
    content: content,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  });

  return (
    <>
      <EditorContent className='mx-auto pt-10 prose prose-violet min-w-full pl-12 pr-12' editor={editor} />
      {editor && (
        <MyFloatingMenu editor={editor} />
      )}
      {editor && (
        <MyBubbleMenu editor={editor} />
      )}
    </>
  )
}

export default Tiptap
