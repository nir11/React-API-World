
# React-API-World [![Netlify Status](https://api.netlify.com/api/v1/badges/142b6577-41bb-4d21-846a-096cd87214af/deploy-status)](https://app.netlify.com/sites/react-api-world/deploys)

A simple React app that displays the latest information of a chosen country from several API sources:

- Breaking API
- Instagram API
- Youtube API

![Home page]https://github.com/nir11/React-API-World/public/screenshot.png)

## Getting started

Sign up and get to following API keys:
- [breakingapi.com](https://breakingapi.com/) to get an API key.
- [developers.google.com](https://developers.google.com/youtube/v3) to get an API key.
- Fork the project and clone it locally.
- Create a file at the root of the project called `.env.local` with the following contents:

```sh
REACT_APP_NEWS_API_KEY = 'The API key you obtained from breakingapi.com'
REACT_APP_YOUTUBE_API_KEY = 'The API key you obtained from developers.google.com'
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
