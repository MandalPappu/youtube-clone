import React, { useState, useEffect } from "react";
import { AppContext } from "./contexts/ContextApi.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Header, Feed, SearchResult, VideoDetails} from './Components'

function App() {

  return (
    <AppContext>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/searchResult/:searchQuery" element={<SearchResult/>} />
          <Route path="/video/:id" element={<VideoDetails/>} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
