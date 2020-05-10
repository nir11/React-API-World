import React, { Component } from 'react';
import './App.css';
import ReactFlagsSelect from 'react-flags-select';
//import css module
import 'react-flags-select/css/react-flags-select.css';
import Video from './components/Video/Video';
import SlideToggle from './components/SlideToggle/SlideToggle';
import Article from './components/Article/Article';
import WeatherForecast from './components/Weather/WeatherForecast';
import Instagram from './components/Instagram/Instagram';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import country from 'country-list-js';
import Headroom from 'react-headroom';
import normalizeLocale from "normalize-locale";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 


class App extends Component {

  state = {
    countryName: 'United States',
    countryHashtagName: 'UnitedStates',
    capitalCityName: 'Washington',
    articles: [],
    videos: [],
    instagramTopPosts: [],
    youtubeCounter: 0,
    articleCounter: 0,
    weather: []
  }
  
  
  fetchData(selectedCountry, countryHashtagName, capital) {

    var selectedCountryLangCode = normalizeLocale.normalizeLocale(selectedCountry).languages[0];
    console.log(selectedCountryLangCode + "-" + selectedCountry);

    //News API
    fetch('https://api.breakingapi.com/news?type=headlines&locale=' + selectedCountryLangCode + '-' + selectedCountry + '&api_key=' + `${process.env.REACT_APP_NEWS_API_KEY}`)
    .then(res => res.json())
    .then((data) => {
      let dataArticle = data.articles.map(article => {
        return (
          <div>
            <Article 
              counter={++this.state.articleCounter}
              source={article.source.name} 
              title={article.title} 
              // content={article.content}
              description={article.snippet}
              selectedCountry={selectedCountry}
              url={article.link}
              urlToImage={article.primary_image_link}
              />             
          </div>
        )
      });
      this.setState({articles: dataArticle})
    })
    .catch(console.log)

    // Youtube API
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=" + selectedCountry + "&key=" + `${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then(res => res.json())
    .then((data) => {
      let dataVideos = data.items.map(video => {
        return (
          <div>
            <Video 
              youtubeCounter={++this.state.youtubeCounter}
              title={video.snippet.title} 
              publishedTime={video.snippet.publishedAt.substring(0, 10)} 
              description={video.snippet.description}
              url={"https://www.youtube.com/watch?v=" + video.id}
              urlToImage={video.snippet.thumbnails.high.url}/> 
              
          </div>
        )
      });
      this.setState({videos: dataVideos})
    })
    .catch(console.log)

    // Instagram API
    fetch("https://www.instagram.com/explore/tags/" + countryHashtagName + "/?__a=1")
    .then(res => res.json())
    .then((data) => {
      let instagramTopPostsData = data.graphql.hashtag.edge_hashtag_to_top_posts.edges.map(insta => {
        return (
          <div>
            <Instagram 
              url={"https://www.instagram.com/p/" + insta.node.shortcode}
             />             
          </div>
        )
      });
      this.setState({instagramTopPosts: instagramTopPostsData})
    })
    .catch(console.log)  
  
    // Weather API
    let weatherData = (
      <div>
        <WeatherForecast city={capital}/>       
      </div>
    )
    this.setState({weather: weatherData})

  }

 


  setCountry = (selectedCountry) => {
    this.setState({countryCode: selectedCountry});

    this.setState({youtubeCounter: 0})
    this.setState({articleCounter: 0})
    
    var found = country.findByIso2(selectedCountry);

    var str = found.name;
    this.setState({countryName: found.name});
    var space_stripped_str = str.replace(/\s/g,'');
    if(str.includes(","))
    {
      space_stripped_str = space_stripped_str.substring(0, space_stripped_str.indexOf(','));
    }

    this.setState({countryHashtagName: space_stripped_str});


    this.fetchData(selectedCountry, space_stripped_str, found.capital);

}
  // Call API request
  componentDidMount() {
    this.fetchData('us', 'UnitedStates', 'Washington');
    
  }



  
  render () {
  
    return (
      <div>
        <ScrollUpButton />
        <Headroom>
        <div className="header"> 
          <h1 className="header-text">React API World</h1>
          <ReactFlagsSelect searchable={true} defaultCountry="US" onSelect={this.setCountry} className="header-flags"/>
          <div className="powered_by_container">
            <h5 className="powered_by_name">Powered by Nir Almog</h5>
            <Tooltip title="https://github.com/nir11">
              <IconButton aria-label="github" href="https://github.com/nir11/" target="_blank">
                <GitHubIcon className="github_icon"/>
              </IconButton>
           </Tooltip>
           <Tooltip title="https://www.linkedin.com/in/nir-almog-9a4202151">
              <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/nir-almog-9a4202151/" target="_blank">
                <LinkedInIcon className="linkedin_icon"/>
              </IconButton>
            </Tooltip>

          </div>
          
        </div>
        </Headroom>
        

        <div className="socialMediasContainer">
            <SlideToggle>
              {({ toggle, setCollapsibleElement }) => (
                <div className="insideSocialMedias">
                  <a>
                  <span className="labelSocialMedias" onClick={toggle} variant="primary" size="lg" block>
                    Social Medias   
                  </span>
                  </a>
                  
                  <div className="my-collapsible__content" ref={setCollapsibleElement}>
                  <SlideToggle>
                    {({ toggle, setCollapsibleElement }) => (
                      <div className="my-collapsible">
                        <Tabs defaultIndex={1}>
                      <TabList className="tabList">
                        <Tab><YouTubeIcon /></Tab>
                        <Tab><InstagramIcon/></Tab>
                        {/* <Tab><TwitterIcon/></Tab> */}
                      
                      </TabList>

                      <TabPanel>        
                        <div className="socialMediasScroller">
                          <div className="youtubeDiv">
                            <Chip className="youtubeTrendingChip"
                              label={"YouTubeTrending - "+ this.state.countryName}
                            color="secondary"
                            />   
                            <br/><br/>
                            {this.state.videos}
                          </div>
                        </div>   
                      </TabPanel>
                      <TabPanel>  
                        <div className="socialMediasScroller">     
                          <div className="instagramDiv">
                          <Chip className="instagramChip"
                            label={"Top Posts #"+ this.state.countryHashtagName}
                          color="secondary"/>   
                          {this.state.instagramTopPosts}
                          </div>
                        </div>
                      </TabPanel>
                      {/* <TabPanel>  
                        <div className="socialMediasScroller">     
                          <div>
                            {this.state.twitterList}
                          </div>
                        </div>
                      </TabPanel> */}
                    </Tabs>
                      </div>
                    )}
                  </SlideToggle>
                  </div>
                        
                </div>
              )}
            </SlideToggle>
           
            {/* <SlideToggle>
            {({ toggle, setCollapsibleElement }) => (
                <div className="insideSocialMedias">
                  <a>
                  <span className="labelWeather" onClick={toggle} variant="primary" size="lg" block>
                    Weather   
                  </span>
                  </a>
                  <div className="my-collapsible__content" ref={setCollapsibleElement}>
                  <SlideToggle>
                    {({ toggle, setCollapsibleElement }) => (
                      <div className="weatherForecastDiv">
                        {this.state.weather}
                      </div>
                    )}
                  </SlideToggle>
                  </div>
                        
                </div>
              )}

            </SlideToggle> */}


          </div>
     
          <div className = "article">
          <SlideToggle>
              {({ toggle, setCollapsibleElement }) => (
                <div className="my-collapsible">
                  <span className="labelNews" onClick={toggle} variant="secondary" size="lg" block>
                    Latest News   
                  </span>
                  <div className="my-collapsible__content" ref={setCollapsibleElement}>
                  <div>
   
                    {this.state.articles}</div>
                  </div>
                        
                </div>
              )}
            </SlideToggle>
          </div>
  
      </div>
      
    );
  }
}



export default App;
