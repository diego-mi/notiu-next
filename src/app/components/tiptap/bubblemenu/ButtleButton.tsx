import React, {ComponentProps, ReactNode} from "react";

export interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button className='p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-500 hover:bg-zinc-300 data-[active=true]:bg-zinc-100' {...props}></button>
  );
}
