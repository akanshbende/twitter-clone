import { Height } from "@mui/icons-material";
import { useState } from "react";
import { Avatar, Button } from "@mui/material";
import React from "react";
import db from "./Firebase";
import doge from "../../public/doge.jpg";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  // console.log(typeof tweetMessage);
  const sendTweet = (e) => {
    // as we are in form ,when we click on submit it refresh page so to prevent it we use e.prevent defalut
    e.preventDefault(); //stops refresh
    db.ref("posts")
      .set({
        displyName: "Akansh Bende",
        username: "asbende",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "doge.jpg",
      })
      .catch(alert);

    //after mapping we are reset them to get clear input field again
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <>
      <div className="tweetBox">
        <form action="">
          <div className="tweetBox__input">
            <Avatar src={doge} style={{ width: "50px", height: "50px" }} />
            <input
              // value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
              placeholder="What's Happening?"
              type="text"
            />
          </div>
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox__imageInput"
            placeholder="Enter image Url"
            type="text"
          />

          <Button
            type="submit"
            onClick={sendTweet}
            className="tweetBox__tweetButton"
          >
            Tweet
          </Button>
        </form>
      </div>
    </>
  );
}

export default TweetBox;
