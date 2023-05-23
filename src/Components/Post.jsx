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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import { ref, remove } from "firebase/database";
import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteIcon from "@mui/icons-material/Delete";

import { doc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import db from "./Firebase";

const Post = forwardRef(
  (
    {
      displyName,
      username,
      verified,
      timestamp,
      text,
      image,
      avatar,
      deleteTweet,
    },
    ref
  ) => {
    const handleDelete = async () => {
      // await deleteDoc(doc(db, "posts"));
      remove(ref(db, "posts/", docRef.id))
        .then(() => {
          console.log("Remove Succeeed...");
        })
        .catch((error) => {
          console.log("Remove Failed" + error.message);
        });
    };

    return (
      <>
        <div className="post" ref={ref}>
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
                <div className="delete-post" onClick={deleteTweet}>
                  {/* Option button */}
                  <DeleteIcon />
                </div>
              </div>
              <div className="post__headerDescription">
                <p>{text}</p>
              </div>
            </div>
            <img src={image} width={"500px"} alt="" />
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
);

export default Post;
