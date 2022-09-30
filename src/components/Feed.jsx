import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import FlipMove from 'react-flip-move';

import db from '../firebase';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        });
    }, []);

  return (
    <div className="feed">
        {/* Header */}
        <div className="feed__header">
            <h2>Home</h2>
        </div>

        {/* Tweetbox */}
        <TweetBox />

        {/* Posts */}
        <FlipMove>
            {posts.map(({ id, data: {
                    displayName, username, verified,
                    text, avatar, image }}) => (
                <Post
                    key={id}
                    displayName={displayName}
                    username={username}
                    verified={verified}
                    text={text}
                    avatar={avatar}
                    image={image}
                />
            ))}
        </FlipMove>

    </div>
  );
}

export default Feed;