import React, { useState } from 'react';
import './TweetBox.css';

import { Avatar, Button } from '@mui/material';

import db from '../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault(); // stops the page rfom being refreshed

        db.collection('posts').add({
            displayName: "dis play na me",
            username: "user_name",
            verified: false,
            text: `${tweetMessage}`,
            image: `${tweetImage}`,
            avatar: "",
        });

        setTweetMessage("");
        setTweetImage("");
    }

  return (
    <div className="tweetBox">
        <form action="">
            <div className="tweetBox__input">
                <Avatar
                    src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                />
                <input
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    placeholder="What's happening"
                    type="text" 
                />
            </div>
            <input
                className="tweetBox__imageInput"
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                placeholder="Optional: Enter image URL"
                type="text" 
            />
            <Button 
                onClick={sendTweet}
                className="tweetBox__tweetButton"
                type="submit" 
            >Tweet</Button>
        </form>
    </div>
  );
}

export default TweetBox;