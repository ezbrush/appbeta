"use strict";
const dialogflow = require("dialogflow");
require('dotenv').config();
const credentials = {
    client_email: process.env.DF_CLIENT_EMAIL,
    private_key: process.env.DF_PRIVATE_KEY
  };
  
 const sessionClient = new dialogflow.SessionsClient({
   projectId: process.env.DF_PROJECT_ID,
   credentials
 });
 

  module.exports.sendTextQuery= async(sessionIds, sender, text, params = {})=>{
        try {
            const sessionPath = sessionClient.sessionPath(
                process.env.DF_PROJECT_ID,
                sessionIds.get(sender)
            );
    
            const request = {
                session: sessionPath,
                queryInput: {
                text: {
                    text: text,
                    languageCode: process.env.DF_LANGUAGE_CODE,
                },
                },
                // outputAudioConfig: {
                // audioEncoding: 'OUTPUT_AUDIO_ENCODING_MP3',
                // sampleRateHertz: 44100
                // },
                queryParams: {
                payload: {
                    data: params,
                },
                },
            };
            const responses = await sessionClient.detectIntent(request);
            return responses;   
        } catch (error) {
            console.log(error);
        }   
  };