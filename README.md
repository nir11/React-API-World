
# React-API-World [![Netlify Status](https://api.netlify.com/api/v1/badges/142b6577-41bb-4d21-846a-096cd87214af/deploy-status)](https://app.netlify.com/sites/react-api-world/deploys)

[Live Demo](https://react-api-world.netlify.app/)

A simple React app that displays the latest information of a chosen country from several API sources:

- News API
- Instagram API
- Youtube API

![Home Page](https://github.com/nir11/React-API-World/blob/master/public/screenshot.png)


## Getting started

Sign up and get to following API keys:
- [newsapi.org](https://newsapi.org/)
- [developers.google.com](https://developers.google.com/youtube/v3)
- Fork the project and clone it locally.
- Create a file at the root of the project called `.env.local` with the following contents:

```sh
REACT_APP_NEWS_API_KEY = 'The API key you obtained from newsapi.org'
REACT_APP_YOUTUBE_API_KEY = 'The API key you obtained from developers.google.com'
```

In the project directory, you can run:


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
