import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import db from "./Firebase";
import Post from "./Post";
import { getDocs, collection } from "firebase/firestore";
import SearchIcon from "@mui/icons-material/Search";
import { doc, deleteDoc } from "firebase/firestore";
import FlipMove from "react-flip-move";

import "firebase/firestore";
import { query, ref, remove } from "firebase/database";

function Feed() {
  const [posts, setPosts] = useState([]);

  const deleteTweet = async (post) => {
    await deleteDoc(doc(db, "posts", post.id));
    console.log(id);
  };

  async function getData() {
    try {
      const postCol = query(collection(db, "posts"));
      const postSnapshot = await getDocs(postCol);
      const postList = postSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(postList);
    } catch (error) {
      console.log("Error getting posts ->", error);
    }
  }
  useEffect(() => {
    getData();
    console.log(posts);
  }, []);

  // useEffect(() => {
  //   // Get a list of posts from your database

  //   getData();
  //   console.log(posts);
  // }, []);
  // console.log(posts);

  {
    /* IMPPPPPPPPPPPPPP DELETEEEEEEEEEEEEE */
  }

  return (
    <>
      <div className="feed">
        {/* Header */}
        <div className="feed__header">
          <h2>Home</h2>
          <div
            className="widgets__input"
            style={{
              marginTop: "0",
              width: "100%",
              backgroundColor: "#f5f8fa",
            }}
          >
            <SearchIcon className="widgets__searchIcon" />
            <input
              placeholder="Search Twitter"
              type="text"
              style={{
                marginTop: "0",
                width: "100%",
                backgroundColor: "#f5f8fa",
              }}
            />
          </div>
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
              onClick={() => deleteTweet(post)}
            />
          ))}
        </FlipMove>

        {/* Posts */}
      </div>
    </>
  );
}

export default Feed;
