import React from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchPage from './Components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header/>

        <Switch>
          <Route path="/search">
            {/* Search page*/}
            <SearchPage/>
          </Route>

          <Route path="/">
            {/* Home */}
            <Home/>
          </Route>
        </Switch>
        
        {/* Footer */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
