import React from 'react';
import ReactDOM from "react-dom"
import Webcam from 'react-webcam';
import { useRef } from 'react';

export default function Cam(){
    const webRef = useRef(null);
    var ImageRaw = null;
    const takePicture= () => {
        ImageRaw = webRef.current.getScreenshot();
        console.log(ImageRaw)
    }

    const analyze= async () => {
        const response = await fetch("http://127.0.1:5000/detect_items", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: ImageRaw
        });
        const content = await response.json();
        console.log(content);
    }

    return (
        <div>
         <Webcam ref={webRef}/>
         <button onClick={()=>{
            takePicture();
         }}>Take Picture</button>
         <button onClick={()=>{
            analyze();
         }}>Analyze</button>
        </div>
    )
}