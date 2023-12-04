import { React, useState } from "react";
import { AudioRecorder } from 'react-audio-voice-recorder';
import axios from "axios";

function Recording({setResults,input,textBool,setSpinner}){
    const [baseData,setBaseData] = useState('')
    const [enableButton,setEnableButton] = useState(false)
    const email = sessionStorage.getItem('email')
    function blobToBase64(blob, callback) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const base64data = event.target.result.split(',')[1];
            callback(base64data);
        };
        reader.readAsDataURL(blob);
    }
    const addAudioElement = (blob) => {
        setEnableButton(true)
        const url = URL.createObjectURL(blob);
        const audio = document.getElementById("audio");
        audio.src = url;
        blobToBase64(blob, function (base64data) {
            setBaseData(base64data)
            // console.log(base64data);
        });
        audio.controls = true;
    };
    const updateScore = (score) =>{
        if(score>90){
            return "Excellent"
        }
        else if(score >80){
            return "Very Good"
        }
        else if(score > 70){
            return "Good"
        }
        else if(score >60){
            return "Average"
        }
        else{
            return "Poor"
        }
    }
    const handleSubmit = async ()=>{
        if(baseData !== '' && input !== ''){
            try{
                setSpinner(true)
            const responseS3 = await axios.post("https://44.211.21.6/uploadS3",{email,baseData})
            console.log(responseS3.data)
            const link = responseS3.data.Link;
            const text = input;
            const responseAPI = await axios.post("https://44.211.21.6/getResults",{baseData,text})
            console.log(responseAPI.data)
            const numScore = responseAPI.data.text_score.speechace_score.pronunciation;
            const score = updateScore(numScore)
            const responseUpload = await axios.post("https://44.211.21.6/uploadData",{email,link,score,text})
            setResults(responseAPI.data)
            setBaseData('')
            setSpinner(false)
            }
            catch(error){
                alert("Something went wrong try again")
                console.log(error)
                setSpinner(false)
            }
        }
        else{
            alert("Record the audio again")
        }
        setSpinner(false)

    }
    return(
        <>
        <br/>
            <div style={{display:"flex",
                         marginLeft:"80px"}}>
                {textBool && <AudioRecorder
                    onRecordingComplete={addAudioElement}
                                       
                    showVisualizer={true}
                    downloadOnSavePress={false}
                    downloadFileExtension="webm"
                >
                </AudioRecorder>}
                {textBool && <audio style={{marginLeft:"40px"}}controls id="audio">
                </audio>}
            </div>
            <br/>
            {textBool && enableButton && <center><button onClick={handleSubmit}>Score my Recording</button></center>}
        </>
    )
}
export default Recording;