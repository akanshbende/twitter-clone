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
import { Button } from "@mui/material";

function Sidebar() {
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
        <Button varient="Outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </div>
    </>
  );
}

export default Sidebar;
