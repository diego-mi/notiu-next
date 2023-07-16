import {Editor, FloatingMenu} from "@tiptap/react";
import {FloatingMenuButton} from "@/app/components/tiptap/floatingmenu/FloatingMenuButton";

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
      <FloatingMenuButton
        text='Texto'
        description='Comece a escrever com texto sem formatação.'
        imageSrc='https://www.notion.so/images/blocks/text/en-US.png'
        onClick={() => {
          editor.chain().focus().toggleHeading({level: 1}).run();
        }}
      />
      <FloatingMenuButton
        text='Título 1'
        description='Título de seção grande.'
        imageSrc='https://www.notion.so/images/blocks/header.57a7576a.png'
        onClick={() => {
          editor.chain().focus().toggleHeading({level: 1}).run();
        }}
      />
      <FloatingMenuButton
        text='Título 2'
        description='Título de seção médio.'
        imageSrc='https://www.notion.so/images/blocks/subheader.9aab4769.png'
        onClick={() => {
          editor.chain().focus().toggleHeading({level: 2}).run();
        }}
      />
      <FloatingMenuButton
        text='Título 3'
        description='Título de seção pequeno.'
        imageSrc='https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png'
        onClick={() => {
          editor.chain().focus().toggleHeading({level: 3}).run();
        }}
      />
    </FloatingMenu>
  );
}
