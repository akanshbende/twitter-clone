import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Feed } from "@mui/icons-material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/app" index element={<App />} />
        </Routes>
      </BrowserRouter> */}
      <div className="app">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* widgets */}
        <Widgets />
      </div>
    </>
  );
}

export default App;
