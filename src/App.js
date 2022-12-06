import React from "react";
import "./App.css";
import {Routes, BrowserRouter, Route} from"react-router-dom";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import About from "./pages/About";
import BlogDesc from "./pages/BlogDesc";
import NotFound from "./pages/NotFound";
import {ToastContainer } from "react-toastify";
import Header from "./components/Header";

function App(){
  return(
  <>
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer/>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/addblog" element={<AddBlog/>}/>
        <Route path="/EditBlog/:id" element={<AddBlog/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/BlogDesc/:id" element={<BlogDesc/>}/>
        <Route path="*" element={<NotFound/>}/>
    
  
      </Routes>
    </div>

    </BrowserRouter>
    </>
  );

  
}

export default App;