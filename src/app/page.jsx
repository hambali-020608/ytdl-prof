'use client'
import Image from "next/image";
import { useState } from "react";
import Navbar from "./component/navbar";
import Downloadmp3 from "./pages/downloadmp3";
import Downloadmp4 from "./pages/downloadmp4";


export default function Home() {
const [url,setUrl]=useState('');
const [tabs,setTabs]=useState('ytmp4')
const [link,setLink]=useState('tunggu dulu ')

async function handleClick(){
 

try {
  const response = await fetch('/api/youtube', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
  });

  const data = await response.json();
  const video = await data.data
  setLink(<a href={video.mp4}  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" download>
    download
</a>)
} catch (error) {
  console.error("Error:", error);
}
}




  


  return (
  <>
    <Navbar>
        <a className={`nav-link btn ${tabs === 'ytmp4' ? 'active' : ''}`} aria-current="page"  href='#' onClick={()=>setTabs("ytmp4")} style={tabs==='ytmp4'?{cursor:'pointer',fontSize:'30px'}:{}}>Youtube-mp4</a>
        <a className={`nav-link btn ${tabs === 'ytmp3' ? 'active' : ''}`} aria-current="page" href='#'  onClick={()=>setTabs("ytmp3")} style={tabs==='ytmp3'?{cursor:'pointer',fontSize:'30px'}:{}}>Youtube-mp3</a>
        </Navbar> 
    
       {tabs =='ytmp4' && <Downloadmp4/>}
       {tabs == 'ytmp3' && <Downloadmp3/>} 
      
      {/* <DownloadComponent/> */}
     
      

   
      
        </>
  );
}
