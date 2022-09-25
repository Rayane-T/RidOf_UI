import React from 'react';
import ReactDOM from "react-dom"
import Webcam from 'react-webcam';
import { useRef } from 'react';

export default function Cam(){
    const webRef = useRef(null);
    var ImageRaw = null;
    var Example = null;
    var TransformRawTojpeg = ({ ImageRaw }) => <img src={`data:image/jpeg;base64,${ImageRaw}`} /> 
    const takePicture= () => {
        ImageRaw = webRef.current.getScreenshot();
        Example = ({ ImageRaw }) => <img src={`data:image/jpeg;base64,${ImageRaw}`} />

        console.log(ImageRaw)
    }

    return (
        <div>
         <Webcam ref={webRef}/>
         <button onClick={()=>{
            takePicture();
         }}>Send Image</button>
        </div>
    )
}