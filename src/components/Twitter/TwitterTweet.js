import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const TwitterTweet = (props) => {
    return (
       <div className="videoDiv">
           <TwitterTweetEmbed
            tweetId="1083592734038929408"
            />
       </div>

  
      )
    };

  export default TwitterTweet