import React, {ComponentProps} from "react";

export interface FloatingMenuButtonProps extends ComponentProps<'button'> {
  imageSrc: string;
  text: string;
  description: string;
}

export function FloatingMenuButton(props: FloatingMenuButtonProps) {
  return (
    <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-100' {...props}>
      <img src={props.imageSrc} alt={props.description} className='w-12 border border-zinc-300 rounded'/>
      <div className='flex flex-col text-left'>
        <span className='text-sm'>{props.text}</span>
        <span className='text-xs text-zinc-400'>{props.description}</span>
      </div>
    </button>
  );
}
