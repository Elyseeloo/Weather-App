//jshint esversion:8

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "a693836aaefac2557bc126ad3ee3ab01";
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const feelsLike = weatherData.main.feels_like;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

      res.sendFile(__dirname + "/weather.html");
      res.write(
        "<head> <link href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' rel='stylesheet'> <link rel='stylesheet' href='css/styles.css'> </head> <body> <h1>The weather in " + query + " is " + temp + " degrees.</h1></body>");
      res.write("<p>The weather is currently " + description + ".</p>");
      res.write("<div class='icon-box' ><img class='weather-icon' src=" + imgUrl + " ></div>");
      res.write("<form action='/'' method='get'><button type='submit' class='return.btn button'>Go Back</button></form>");
      res.send();
      app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html");
      });
      console.log(temp, feelsLike);
      console.log(description);
  });
  });

});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port 3000.");
});
