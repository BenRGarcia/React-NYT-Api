import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Saved } from './pages/Saved/Saved';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/saved' component={Saved} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
