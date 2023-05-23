import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import db from "./Firebase";
import Post from "./Post";
import { getDocs, collection } from "firebase/firestore";

import FlipMove from "react-flip-move";

import "firebase/firestore";
import { ref, remove } from "firebase/database";
function Feed() {
  const [posts, setPosts] = useState([]);
  // const [docId, setDocId] = useState("");

  useEffect(() => {
    // Get a list of posts from your database
    async function getData() {
      try {
        const postCol = collection(db, "posts");
        const postSnapshot = await getDocs(postCol);
        const postList = postSnapshot.docs.map((doc) => doc.data());
        setPosts(postList);
      } catch (error) {
        console.log("Error getting posts ->", error);
      }
    }
    getData();
  }, [posts]);
  // console.log(posts);
  const deleteTweet = (post) => {
    remove(ref(db, post.key));
  };

  return (
    <>
      <div className="feed">
        {/* Header */}
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        {/* TweetBox */}

        <TweetBox />

        {/* Posts */}
        <FlipMove>
          {posts.map((post, index) => (
            <Post
              key={index}
              // value={docId}
              // onChange={(e) => setDocId(e.target.value)}
              displyName={post.displyName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              deleteTweet={deleteTweet}
            />
          ))}
        </FlipMove>

        {/* Posts */}
      </div>
    </>
  );
}

export default Feed;
