import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHome from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from "react";
import News from "./components/News";

export default class App extends Component {
  pageSize=5
  apiKey=process.env.REACT_APP_DAILY_PLANET_API

  state = {
    progress: 0
  }

  setProgress =(progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <BrowserRouter>
      <div>
          <NavbarHome />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // height={3}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" />}  />
          <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
          <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
          <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science" />} />
          <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health" />} />
          <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}
