import React from 'react'
import { useState } from 'react'

export default function App() {
  const [textinput , setTextInput] = useState();

  console.log(textinput);
  return (
    <div className='h-screen w-screen bg-slate-300 flex flex-col gap-3 items-center justify-center'>
       <div>
        <h1 className='text-3xl flex items-center justify-center '>Text Translator</h1>
       </div>
       <div className='flex flex-col gap-5 items-center justify-center'>

        <textarea 
        className='bg-white h-40 w-3xl border outline-none rounded-lg'
        onChange={ (e)=> setTextInput(e.target.value) }></textarea>

        <textarea className='bg-white h-40 w-3xl border outline-none rounded-lg'
        onChange={ (e)=> setTextInput(e.target.value) }></textarea>

       </div>

       <div className='bg-blue-700 w-3xl outline-none rounded-lg'> 

        <button className='bg-blue-700 w-3xl outline-none rounded-lg'>Translate</button>

      </div>
    </div>
  )
}
