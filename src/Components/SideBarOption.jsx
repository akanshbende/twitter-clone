import React from "react";

function SideBarOption({ active, text, Icon }) {
  // This component is used so give same hover effect and repeated the comp by sending props
  return (
    <>
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        {/* Capital Icon menas its a component no neet od braces */}
        <Icon />
        <h2>{text}</h2>
      </div>
    </>
  );
}

export default SideBarOption;
