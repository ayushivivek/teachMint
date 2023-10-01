import React from "react";
import UserCard from "./landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<UserCard />}></Route>
        <Route path="/detail/:id" element={<UserProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
