import { React, useState } from "react";
import { AudioRecorder } from 'react-audio-voice-recorder';

function Recording(setBase64){
	function blobToBase64(blob, callback) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const base64data = event.target.result.split(',')[1];
            callback(base64data);
        };
        reader.readAsDataURL(blob);
    }
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.getElementById("audio");
        audio.src = url;
        blobToBase64(blob, function (base64data) {
            setBase64(base64data);
            // console.log(base64data);
        });
        audio.controls = true;
    };
    const handleSubmit = ()=>{

    }
    const start = ()=>{
    }
    return(
        <>
        <br/>
            <div style={{display:"flex",
                         marginLeft:"80px"}}>
                <AudioRecorder
                    onRecordingComplete={addAudioElement}
                    //startRecording={start}
                    
                    showVisualizer={true}
                    downloadOnSavePress={false}
                    downloadFileExtension="webm"
                >
                </AudioRecorder>
                <audio style={{marginLeft:"40px"}}controls id="audio">
                </audio>
            </div>
            <br/>
            <center><button onClick={handleSubmit}>Score my Recording</button></center>
        </>
    )
}
export default Recording;