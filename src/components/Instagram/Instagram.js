import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
import './instagram.css';


const Instagram = (props) => {
    return (
       <div> 
            <InstagramEmbed className="instaPost"
            url={props.url}
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
            <br/>
       </div>

      )
    };

  export default Instagram