import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {LoaderCircle} from 'lucide-react'

export default function App() {
  const [textinput , setTextInput] = useState("");
  const [language , setLanguage] = useState("");
  const [result , setResult] = useState("");
  const [loading , setLoading] = useState(false);

  const handleTextTranslation = async ()=>{
    try{
      setLoading(true);
      const options = {
      method: 'POST',
      url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': 'e60eeaf26emshc822754762349fdp1bf8e4jsn7f909f479caa',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
        q: `${textinput}`,
        source: 'en',
        target: `${language}`,
        format: 'text'
        }
      };
      const response = await axios.request(options);
      setLoading(false);
      console.log(response.data.data.translations[Number(0)].translatedText);
      setResult(response.data.data.translations[Number(0)].translatedText)
    }
    catch(error){
      setLoading(false);
      console.log(error.data);
    }
  }

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

        <textarea className='bg-white h-40 w-3xl border outline-none rounded-lg pr-2 pl-5 p-3 cursor-pointer'
        onChange={ (e)=> setTextInput(e.target.value) } value={result} readOnly></textarea>

        <div>
          <label htmlFor="language">Choose the language: </label>
          <select name="language" defaultValue="en" className='bg-white rounded-lg p-2 cursor-pointer' onChange={(e)=> setLanguage(e.target.value)}>
            <option value="en">Select</option>
            <option value="as">Assamese</option>
            <option value="bn">Bengali</option>
            <option value="gu">Gujarati</option>
            <option value="hi">Hindi</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="mr">Marathi</option>
            <option value="or">Oriya</option>
            <option value="pa">Punjabi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="ur">Urdu</option>
            
          </select>
        </div>

        <button className=' w-full rounded-lg border bg-slate-700 p-3 text-white uppercase flex items-center justify-center cursor-pointer'
        onClick={handleTextTranslation} >
        
        {
          loading ? ( <LoaderCircle className='animate-spin'/>) : "Translate"
        }

        </button>


       </div>

       

    </div>
  )}