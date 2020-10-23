const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.get('/rest/sonar', (req, res) => {
  request(
    { url: 'http://sonarqube.gcp.build.matillion.com:9000/sonar/api/measures/component?component=emerald&metricKeys=ncloc_language_distribution',
    
      headers : {
      "Authorization" : "Basic c29uYXIucXViZTpCVlRzVnBac3BLWTNBSDQ1WXQ="
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