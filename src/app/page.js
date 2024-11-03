'use client'
import { useState } from "react";
import Navbar from "@/component/navbar";
import dynamic from 'next/dynamic';

// // Mengimpor komponen dengan dynamic import
const Downloadmp4 = dynamic(() => import('@/pages/downloadmp4'), { ssr: false });
const Downloadmp3 = dynamic(() => import('@/pages/downloadmp3'), { ssr: false });

export default function Home() {
    const [tabs, setTabs] = useState('ytmp4');

    return (
        <>
            <Navbar>
                <a
                    className={`nav-link btn ${tabs === 'ytmp4' ? 'active' : ''}`}
                    aria-current="page"
                    href='#'
                    onClick={() => setTabs("ytmp4")}
                    style={tabs === 'ytmp4' ? { cursor: 'pointer', fontSize: '30px' } : {}}
                >
                    Youtube-mp4
                </a>
                <a
                    className={`nav-link btn ${tabs === 'ytmp3' ? 'active' : ''}`}
                    aria-current="page"
                    href='#'
                    onClick={() => setTabs("ytmp3")}
                    style={tabs === 'ytmp3' ? { cursor: 'pointer', fontSize: '30px' } : {}}
                >
                    Youtube-mp3
                </a>
            </Navbar> 

             {tabs === 'ytmp4' && <Downloadmp4 />}
            {tabs === 'ytmp3' && <Downloadmp3 />} 
            
        </>
    );
}
