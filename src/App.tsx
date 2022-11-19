import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { Header } from "./components/Header";
import { Routes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Routes />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
