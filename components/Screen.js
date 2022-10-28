import React, { useRef, useEffect } from "react";

function Screen({ question, answer }) {
  const textArea = useRef()

  useEffect(() => {
    const area = textArea.current;
    area.scrollTop = area.scrollHeight;
  }, [question]);

  return (
    <section className='flex flex-col justify-between h-full '>
      <div className='text-4xl'>
        <textarea className='w-full overflow-auto' ref={textArea} type='text' placeholder='0' value={question} disabled />
      </div>
      <div className='text-right text-4xl text-[#747474]'>
      <textarea className='w-full overflow-auto resize-none text-right' type='text' placeholder='0' value={answer} wrap='off' rows={1} disabled />
      </div>
    </section>);
}


export {
  Screen
};