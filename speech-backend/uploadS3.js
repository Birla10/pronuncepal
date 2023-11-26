const connection = require('./connection')
const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const AWS = require('aws-sdk');
const app = express.Router()
AWS.config.update({
    accessKeyId: process.env.AWSKEY,
    secretAccessKey: process.env.AWSSECRET,
    region: 'us-east-2',
});
const s3 = new AWS.S3();
app.post('/', (req, res) => {
    const folder = req.body.email;
    const base64 = req.body.baseData;
    const date = new Date();
    const fileName = date.getHours().toString() + "-" + date.getMinutes().toString() + "-" + date.getSeconds().toString();

    const audioBuffer = Buffer.from(base64, 'base64');
    const bucketName = 'pronunciation-pal';
    const objectKey = `${folder}/${fileName}.mp3`;
    const contentType = 'audio/mpeg';

    const params = {
        Bucket: bucketName,
        Key: objectKey,
        Body: audioBuffer,
        ContentType: contentType,
        ACL: 'public-read'
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.error('Error uploading to S3:', err);
        } else {
            res.send({"Link":data.Location})
            console.log('Successfully uploaded to S3:', data.Location);
        }
    });

})
module.exports = app;