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
    <div className='min-h-screen w-full bg-slate-300 flex flex-col items-center justify-center p-4'>
       <div>
        <h1 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Text Translator</h1>
       </div>

       <div className='flex flex-col gap-5 items-center justify-center w-full max-w-2xl'>

        <textarea 
        className='bg-white h-40 w-full border outline-none rounded-lg p-3 cursor-pointer'
        onChange={ (e)=> setTextInput(e.target.value) }></textarea>

        <textarea className='bg-white h-40 w-full border outline-none rounded-lg p-3'
         value={result} readOnly></textarea>

        <div className='flex flex-col sm:flex-row gap-3 w-full sm:items-center'>
          <label htmlFor="language" className='font-medium'>Choose the language: </label>
          <select name="language" defaultValue="en" className='bg-white rounded-lg p-2 cursor-pointer border w-full sm:w-auto'
           onChange={(e)=> setLanguage(e.target.value)}>
            <option value="en">Select</option>
            <option value="as">Assamese</option>
            <option value="bn">Bengali</option>
            <option value="fr">French</option>
            <option value="gu">Gujarati</option>
            <option value="hi">Hindi</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="mr">Marathi</option>
            <option value="or">Oriya</option>
            <option value="pa">Punjabi</option>
            <option value="es">Spanish</option>
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