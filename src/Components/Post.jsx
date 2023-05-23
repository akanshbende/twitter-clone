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

import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";

import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = forwardRef(
  (
    { displyName, username, verified, timestamp, text, image, avatar, onClick },
    ref
  ) => {
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

                {/* IMPPPPPPPPPPPPPP DELETEEEEEEEEEEEEE */}
                <div className="delete-post" onClick={onClick}>
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
