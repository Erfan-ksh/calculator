import { Screen } from '../components/Screen'
import { ActionButton } from '../components/ActionButtons'
import { NumPad } from '../components/NumPad'
import { useState } from 'react'




export default function Home() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <div className='flex justify-center items-center w-full h-full p-2'>
      <div className='grid grid-rows-[30fr_5fr_65fr] grid-cols-1 w-full h-full max-w-[370px] p-4'>
        <Screen question={question} answer={answer} setQuestion={setQuestion} />
        <ActionButton setQuestion={setQuestion} />
        <NumPad setQuestion={setQuestion} setAnswer={setAnswer} question={question} />
      </div>
    </div>
  )
}
