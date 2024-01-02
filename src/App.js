import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./app/HomeScreen/HomeScreen";
import LoginScreen from "./app/LoginScreen/LoginScreen";

function App() {
  // const user = {
  //   name: "John",
  // };

  const user = null;

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
