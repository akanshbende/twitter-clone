import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <>
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
          <TwitterTimelineEmbed
            className="twitter-timeline scrollbar"
            sourceType="profile"
            screenName="shadcn"
            options={{ height: 400 }}
            noHeader="true"
            noBorders="true"
            noFooter="true"
          />
          <TwitterTimelineEmbed
            className="twitter-timeline scrollbar"
            sourceType="profile"
            screenName="reactjs"
            options={{ height: 400 }}
            noHeader="true"
            noBorders="true"
            noFooter="true"
          />
        </div>
      </div>
    </>
  );
}

export default Widgets;
