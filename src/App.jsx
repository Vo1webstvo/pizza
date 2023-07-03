import './scss/app.scss';
import {useState} from "react";
import Header from './components/header/Header';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
    const[searchValue, setSearcchValue] = useState('');


  return (
    <Router>
        <div className="wrapper">
            <Header searchValue={searchValue} setSearcchValue={setSearcchValue} />
            <Routes>
                <Route path="/" element={<Home searchValue={searchValue}/>} />
                <Route path = '/cart' element={<Cart/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
