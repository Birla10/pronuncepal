const axios = require('axios');
const connection = require('./connection')
const express = require('express');
const app = express.Router()
var fs = require('fs');
const dotenv = require('dotenv')
dotenv.config()
// This is getting results from SpeechAce API
app.post('/', async (req, res) => {
    var FormData = require('form-data');

    const base64 = req.body.baseData;
    const text = req.body.text;
    var data = new FormData();
    var key = process.env.APIKEY; // ADD API KEY HERE
    var api_endpoint = 'https://api.speechace.co';
    const fs = require('fs');

    const base64Data =base64; 
    const decodedData = Buffer.from(base64Data, 'base64');
    const outputFile = "recording.wav"; 
    await fs.writeFileSync(outputFile, decodedData, 'binary');
    var data = new FormData();
    data.append('text', text);
    data.append('user_audio_file', fs.createReadStream('recording.wav'));
    data.append('question_info', '\'u1/q1\'');
    var config = {
        method: 'post',
        url: api_endpoint + '/api/scoring/text/v9/json?key=' + key + '&dialect=en-us&user_id=XYZ-ABC-99001',
        headers: {
            ...data.getHeaders()
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            res.send(response.data)
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
})

module.exports = app;





