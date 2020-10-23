const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.get('/rest/sonar', (req, res) => {
  request(
    { url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',

    //Pull headers from postman or client
    
      headers : {
      "Authorization" : "XXXXXXXXXXXXXXXXXXXXXXX"
    }},
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return "Please try again";
      }

      res.json(JSON.parse(body));
    }
  )
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));