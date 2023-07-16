import {BubbleButton} from "@/app/components/tiptap/bubblemenu/ButtleButton";
import {RxChatBubble, RxChevronDown, RxCode, RxFontBold, RxFontItalic, RxStrikethrough} from "react-icons/rx";
import {BubbleMenu, Editor} from "@tiptap/react";
import React from "react";

export interface MyBubbleMenuProps {
  editor: Editor
}

export function MyBubbleMenu({editor}: MyBubbleMenuProps) {
  return(
    <BubbleMenu className='bg-white py-1 px-1 shadow-xl border border-gray-300 shadow-black/30 rounded-lg overflow-hidden flex divide-x divide-zinc-200' editor={editor}>
      <BubbleButton>
        Text
        <RxChevronDown className='w-4 h-4'/>
      </BubbleButton>
      <BubbleButton>
        <RxChatBubble className='w-4 h-4'/>
        Comment
      </BubbleButton>
      <div className='flex items-center'>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          data-active={editor.isActive('bold')}
        >
          <RxFontBold className='w-4 h-4'/>
        </BubbleButton>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          data-active={editor.isActive('bold')}
        >
          <RxFontItalic className='w-4 h-4'/>
        </BubbleButton>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          data-active={editor.isActive('bold')}
        >
          <RxStrikethrough className='w-4 h-4'/>
        </BubbleButton>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          data-active={editor.isActive('bold')}
        >
          <RxCode className='w-4 h-4'/>
        </BubbleButton>
      </div>
    </BubbleMenu>
  )
}
