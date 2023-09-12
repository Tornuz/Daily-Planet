import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHome from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState} from "react";
import News from "./components/News";

export default function App () {
  let pageSize=5
  const apiKey=process.env.REACT_APP_DAILY_PLANET_API

  const [progress, setProgress] = useState(0)
    return (
      <BrowserRouter>
      <div>
          <NavbarHome />
          <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general" />}  />
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
