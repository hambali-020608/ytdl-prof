import { useEffect, useRef } from 'react'
import { Fragment } from 'react'
'../app/App.css'





function HeaderFormat(props){

   
   
    return(
        <header className="text-center header">
            <div className='text-center'>
        <h1 className='fw-bold'  style={{fontSize:'50px'}}>YouTube Downloader {props.format}</h1>
        <p className='lh-1 justify-content-center '  style={{}}>Mendownload video youtube dengan mudah, hanya copy url dari youtube, paste url nya di bawah sini dan klik “download”</p>
        </div>
        </header>
        
    )
}
export default HeaderFormat