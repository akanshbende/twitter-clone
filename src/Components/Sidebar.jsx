import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SideBarOption from "./SideBarOption";
import {
  BookmarkAddOutlined,
  ListAltOutlined,
  MailOutlineOutlined,
  MoreHorizOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import doge from "../../public/doge.jpg";

import { Button, Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Popup from "reactjs-popup";
import { useState } from "react";
import PopUp from "./PopUp";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="sidebar">
        {/* twitter icon */}
        <TwitterIcon className="sidebar_twitterIcon" />
        {/* SidebarOption button */}
        <SideBarOption active Icon={HomeIcon} text="Home" />
        <SideBarOption Icon={SearchIcon} text="Exploe" />
        <SideBarOption Icon={NotificationsNoneIcon} text="Notification" />
        <SideBarOption Icon={MailOutlineOutlined} text="Message" />
        <SideBarOption Icon={BookmarkAddOutlined} text="Bookmarks" />
        <SideBarOption Icon={ListAltOutlined} text="Lists" />
        <SideBarOption Icon={PermIdentityOutlined} text="Profile" />
        <SideBarOption Icon={MoreHorizOutlined} text="More" />

        {/* tweet button */}

        <div>
          <Button
            varient="Outlined"
            className="sidebar__tweet"
            fullWidth
            onClick={togglePopup}
          >
            Tweet
          </Button>

          {isOpen && (
            <PopUp
              content={
                <>
                  <b>Design your Popup</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <button>Test button</button>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>

        <div className="user_account">
          <div className="user__avatar post__avatar">
            <Avatar style={{ width: "50px", height: "50px" }} src={doge} />
          </div>
          <div className="user__details">
            <h3>Akansh Bende</h3>
            <h4>@asbende</h4>
          </div>
          <div className="more_options">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
