import React from 'react'
import { useState } from 'react'

export default function App() {
  const [textinput , setTextInput] = useState();
  const [language , setLanguage] = useState();

  console.log(textinput);
  console.log(language);
  return (
    <div className='h-screen w-screen bg-slate-300 flex flex-col gap-5 items-center justify-center'>
       <div>
        <h1 className='text-3xl flex items-center justify-center '>Text Translator</h1>
       </div>
       <div className='flex flex-col gap-5 items-center justify-center'>

        <textarea 
        className='bg-white h-40 w-3xl border outline-none rounded-lg pr-2 pl-5 p-3'
        onChange={ (e)=> setTextInput(e.target.value) }></textarea>

        <textarea className='bg-white h-40 w-3xl border outline-none rounded-lg pr-2 pl-5 p-3'
        onChange={ (e)=> setTextInput(e.target.value) }></textarea>

        <div>
          <label htmlFor="language">Choose the language: </label>
          <select name="language" defaultValue="en" className='bg-white rounded-lg p-2' onChange={(e)=> setLanguage(e.target.value)}>
            <option value="en">Select</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
          </select>
        </div>

        <button className=' w-full rounded-lg border bg-slate-700 p-3 text-white uppercase'>
        Translate
        </button>


       </div>

       

    </div>
  )
}
