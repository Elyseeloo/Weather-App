# Weather-App

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## My process

### Built with

- HTML5
- CSS3
- Node.js
- Express.js
- OpenWeatherMap API
- Heroku

### What I learned

This project used the OpenWeatherMap API to gather weather data and send it back to the user depending on what city they type into the search bar. This was my first time using an API, and while at first, it seemed intimidating, once I understood how to use it in a web application, the process was a breeze. I especially enjoyed breaking down the JSON object and restructuring it to gather the specific data I needed in order for my app to work properly.

Code written in this project that I want to highlight:

```JSX
app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "**************************";
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;
```
These were the constants I used to send to the OpenWeatherMap website to get the data that I needed from their website.

```JSX
response.on("data", (data) => {

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const feelsLike = weatherData.main.feels_like;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
```
This code is the destructuring of the JSON object literal to send specific sections of data back to the user. 

### Continued development

I had a lot of fun building this website, I even designed and developed the layout myself using pure CSS3. For further learning, I want to see if I can expand this project to include a 5- or 7-day weather forecast with icons with each city that a user enters. I think it would be an interesting challenge.

## Author

- Website - [Elyse Chambers](https://www.diaryofelyse.com)
- Frontend Mentor - [Elyseeloo](https://www.frontendmentor.io/profile/Elyseeloo)
- Twitter - [@Elyseeloo\_](https://www.twitter.com/elyseeloo_)
