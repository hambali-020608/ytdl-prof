'use client';
import { useState } from "react";
import Navbar from "@/component/navbar";
import Downloadmp4 from "@/pages/downloadmp4";
import Downloadmp3 from "@/pages/downloadmp3";

export default function Home() {
    const [tabs, setTabs] = useState('ytmp4');

    const handleTabClick = (e, tab) => {
        e.preventDefault(); // Mencegah scroll ke atas
        setTabs(tab);
    };

    return (
        <>
            <Navbar>
                <a 
                    className={`nav-link btn ${tabs === 'ytmp4' ? 'active' : ''}`} 
                    aria-current="page"  
                    href='#' 
                    onClick={(e) => handleTabClick(e, "ytmp4")} 
                    style={tabs === 'ytmp4' ? { cursor: 'pointer', fontSize: '30px' } : {}}>
                    Youtube-mp4
                </a>
                <a 
                    className={`nav-link btn ${tabs === 'ytmp3' ? 'active' : ''}`} 
                    aria-current="page" 
                    href='#'  
                    onClick={(e) => handleTabClick(e, "ytmp3")} 
                    style={tabs === 'ytmp3' ? { cursor: 'pointer', fontSize: '30px' } : {}}>
                    Youtube-mp3
                </a>
            </Navbar>

            {tabs === 'ytmp4' && <Downloadmp4 />}
            {tabs === 'ytmp3' && <Downloadmp3 />}
        </>
    );
}
