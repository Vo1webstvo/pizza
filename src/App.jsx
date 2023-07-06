import './scss/app.scss';
import {useState} from "react";
import Header from './components/header/Header';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {

  return (
    <Router>
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path = '/cart' element={<Cart/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
