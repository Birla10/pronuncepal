const express = require('express');
const app = express.Router();
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
//This is getting results from SOE API
app.get('/', async(req, res) => {
    const link = req.body.link;
    const refText = req.body.text;
    const mode = req.body.mode;


    //Example from API provid+er
    const options = {
        method: 'POST',
        url: 'https://soe1.p.rapidapi.com/api/en-US/'+mode,
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.APIKEY,
            'X-RapidAPI-Host': 'soe1.p.rapidapi.com'
        },
        data: {
            params: {
                mode: mode,
                refText: refText
            },
            format: 'mp3',
            sampleRate: 16000,
            langType: 'en-US',
            audioLink: link
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.send(response.data)
    } catch (error) {
        console.error(error);
        res.sendStatus(404)
    }

})
module.exports = app;
