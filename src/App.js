import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';
import ScrollTop from './components/scroll/ScrollTop';
import Loading from './components/loader/Loading';
import Porfolio from './pages/Porfolio';
// import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
    
    return (
        <Fragment>
        <main className="main">
            <Navbar />
            <Home />
            <About />
            <Skills />
            {/* <Qualification /> */}
            <Porfolio />
            <Contact />
        </main>
            <Footer />
            <ScrollTop />
        </Fragment>
    )
}

export default App
