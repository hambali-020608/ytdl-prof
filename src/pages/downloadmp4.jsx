import { useState, useEffect } from "react";
import "../app/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../layout/layout";

function Downloadmp4() {
    const [url, setUrl] = useState("");
    const [link, setLink] = useState(<p align="center" style={{ position: 'relative', top: '10rem' }}>silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>);

    function handleInput(e) {
        setUrl(e.target.value);
    }

    async function download() {
        try {
            const response = await fetch('/api/youtube', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            const data = await response.json();
            const video = data.data;

            if (video.mp4) {
                setLink(<a href={video.mp4} className='btn btn-danger ms-5' style={{ position: 'relative', top: '10rem' }} download>download</a>);
            } else {
                setLink(<p>Video tidak ditemukan.</p>);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="position-relative" style={{ top: '3rem' }}>
            <Layout format="mp4">
                <input type="text" className="form-control me-2" placeholder="Search..." value={url} onChange={handleInput} />
                <button className="btn btn-primary" type="button" onClick={download}>Search</button>
            </Layout>
            {link}
        </div>
    );
}

export default Downloadmp4;
