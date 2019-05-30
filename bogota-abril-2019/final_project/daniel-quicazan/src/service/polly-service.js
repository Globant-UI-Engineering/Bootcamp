const AWS = require('aws-sdk');

export class PollyService {
  
  static initPolly() {
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:6fcb1395-461a-457e-a189-aaffb1c1b7b5',
    });
  }
  
  static getAvailableVoices() {
    const polly = new AWS.Polly();
    
    let availableVoices = [];
    
    polly.describeVoices({}, (err, data) => {
      if (err) {
        console.log(err, err.stack)
      } else {
        availableVoices = data.Voices;
        console.log(availableVoices)
      }
    });
  }
  
  static getTextUrl(text, callback) {
    var speechParams = {
      OutputFormat: "mp3",
      SampleRate: "16000",
      Text: text,
      TextType: "text",
      VoiceId: "Ivy"
    };
    let polly = new AWS.Polly({apiVersion: '2016-06-10'});
    let signer = new AWS.Polly.Presigner(speechParams, polly);
    
    signer.getSynthesizeSpeechUrl(speechParams, function(error, url) {
      if (error) {
        console.log(error)
      } else {
        callback(url);
      }
    });
  }
}

