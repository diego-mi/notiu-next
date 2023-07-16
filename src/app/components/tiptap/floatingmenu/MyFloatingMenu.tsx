import {Editor, FloatingMenu} from "@tiptap/react";
import React from "react";

export interface MyFloatingMenuProps {
  editor: Editor
}

export function MyFloatingMenu({editor}: MyFloatingMenuProps) {
  return (
    <FloatingMenu
      editor={editor}
      shouldShow={({state}) => {
        const {$from} = state.selection;
        const currentLineText = $from.nodeBefore?.textContent;

        return currentLineText === '/';
      }}
      className='bg-white py-1 px-1 shadow-xl border border-gray-300 shadow-black/30 rounded-lg overflow-hidden flex flex-col'>
      <button
        className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-100'
        onClick={() => {
          const from:number = editor.state.selection.from;
          editor.chain().deleteRange({ from: from - 1, to: from }).focus().run();
        }}
      >
        <img src='https://www.notion.so/images/blocks/text/en-US.png' alt='Comece a escrever com texto sem formatação.' className='w-12 border border-zinc-300 rounded'/>
        <div className='flex flex-col text-left'>
          <span className='text-sm'>Texto</span>
          <span className='text-xs text-zinc-400'>Comece a escrever com texto sem formatação.</span>
        </div>
      </button>
      <button
        className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-100'
        onClick={() => {
          const from:number = editor.state.selection.from;
          editor.chain().deleteRange({ from: from - 1, to: from }).focus(from - 1).toggleHeading({level: 1}).run();
        }}
      >
        <img src='https://www.notion.so/images/blocks/header.57a7576a.png' alt='Título de seção grande.' className='w-12 border border-zinc-300 rounded'/>
        <div className='flex flex-col text-left'>
          <span className='text-sm'>Título 1</span>
          <span className='text-xs text-zinc-400'>Título de seção grande.</span>
        </div>
      </button>
      <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-100'
        onClick={() => {
          const from:number = editor.state.selection.from;
          editor.chain().deleteRange({ from: from - 1, to: from }).focus(from - 1).toggleHeading({level: 2}).run();
        }}
      >
        <img src='https://www.notion.so/images/blocks/subheader.9aab4769.png' alt='Título de seção médio.' className='w-12 border border-zinc-300 rounded'/>
        <div className='flex flex-col text-left'>
          <span className='text-sm'>Título 2</span>
          <span className='text-xs text-zinc-400'>Título de seção médio.</span>
        </div>
      </button>
      <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-100'
        onClick={() => {
          const from:number = editor.state.selection.from;
          editor.chain().deleteRange({ from: from - 1, to: from }).focus(from - 1).toggleHeading({level: 3}).run();
        }}
      >
        <img src='https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png' alt='Título de seção pequeno.' className='w-12 border border-zinc-300 rounded'/>
        <div className='flex flex-col text-left'>
          <span className='text-sm'>Título 3</span>
          <span className='text-xs text-zinc-400'>Título de seção pequeno.</span>
        </div>
      </button>
    </FloatingMenu>
  );
}
