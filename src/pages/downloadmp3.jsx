import { useState } from "react";
import '../app/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../layout/layout";

function Downloadmp3() {
    const [url, setUrl] = useState("");
    const [downloadLink, setDownloadLink] = useState(null); // Menggunakan null untuk menandakan tidak ada link

    const handleInput = (e) => {
        setUrl(e.target.value);
    };

    const download = async () => {
        if (!url) {
            alert("Silakan masukkan URL terlebih dahulu.");
            return; // Menghentikan fungsi jika URL kosong
        }
        
        try {
            const response = await fetch('/api/youtube', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });

            if (!response.ok) {
                throw new Error('Response not OK');
            }

            const data = await response.json();
            const video = data.data; // Sesuaikan jika ada perubahan di struktur data
            if (video && video.mp3) {
                setDownloadLink(video.mp3); // Simpan URL untuk digunakan di <a>
            } else {
                console.error("Video not found in response");
                setDownloadLink(null);
            }
        } catch (error) {
            console.error("Error:", error);
            setDownloadLink(null);
        }
    };

    return (
        <div className="position-relative" style={{ top: '3rem' }}>    
            <Layout format="mp4">
                <input 
                    type="text" 
                    className="form-control me-2" 
                    placeholder="Masukkan URL..." 
                    value={url} 
                    onChange={handleInput} 
                />
                <button 
                    className="btn btn-primary" 
                    type="button" 
                    onClick={download}
                >
                    Search
                </button>
            </Layout> 

            {downloadLink ? (
                <a 
                    href={downloadLink} 
                    className='btn btn-danger ms-5' 
                    style={{ position: 'relative', top: '10rem' }} 
                    download
                >
                    Download
                </a>
            ) : (
                <p align="center" style={{ position: 'relative', top: '10rem' }}>
                    Silakan masukkan URL terlebih dahulu lalu tunggu teks ini berubah jadi tombol download
                </p>
            )}
        </div>
    );
}

export default Downloadmp3;
