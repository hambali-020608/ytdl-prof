// app/api/youtube/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
    const { url } = await request.json();

    try {
        const youtubeResponse = await fetch("https://shinoa.us.kg/api/download/ytdl", {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'api_key': 'free',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: url })
        });

        if (!youtubeResponse.ok) {
            throw new Error(`HTTP error! Status: ${youtubeResponse.status}`);
        }

        const data = await youtubeResponse.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
}
