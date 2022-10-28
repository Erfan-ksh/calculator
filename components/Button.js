import React from "react";

const buttonVariants = {
  'primary': 'bg-[#F0F0F0] border-[#F0F0F0] text-[#4E4D4D]',
  'secondry': 'bg-[#F0F0F0] border-[#F0F0F0] text-[#66FF7F]',
  'specialgreen': 'bg-[#66FF7F] border-[#66FF7F] text-[#F0F0F0]',
  'specialred': 'bg-[#FF5959] border-[#FF5959] text-[#F0F0F0]'
}

function Button({ children, variant = 'primary' }) {
  return <div className='flex justify-center items-center'><button className={`border-2 w-full h-full text-[2em] rounded-[9px] text-center active:border-black ${buttonVariants[variant]}`}>{children}</button></div>
}

Button = React.memo(Button)

export { Button };