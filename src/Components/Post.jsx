import {
  ChatBubbleOutline,
  Favorite,
  FavoriteOutlined,
  Publish,
  PublishOutlined,
  PublishSharp,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

function Post({
  displyName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <>
      <div className="post">
        <div className="post__avatar">
          <Avatar style={{ width: "50px", height: "50px" }} src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displyName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text.tweetMessage}</p>
              {console.log(text)}
            </div>
          </div>
          <img src={image} width={"500px"} alt="post image" />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <Favorite fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
