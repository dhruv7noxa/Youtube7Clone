import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import FileUploader from "./Pages/FileUploader/FileUploader";  // Import the FileUploader component

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<FileUploader />} />  {/* New route for FileUploader */}
      </Routes>
    </div>
  );
};

export default App;

