import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteIcon from "@mui/icons-material/Delete";
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
import CloseIcon from "@mui/icons-material/Close";
import Post from "./Post";
import TweetBox from "./TweetBox";
function PopUp({
  displyName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
  handleClose,
}) {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="close-icon" onClick={handleClose}>
            <CloseIcon />
          </div>
          <TweetBox />
        </div>
      </div>
      {/* <Post /> */}
    </>
  );
}

export default PopUp;
