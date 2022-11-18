import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Header } from "./components/Header";
import { Routes } from "./routes";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
