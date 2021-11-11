import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import Details from "./views/Details/Details";

import ScrollToTop from "./utils/ScrollToTop";


function App () {
  const [loginModal, setLoginModal] = useState(false)

  return (
    <div className="App">
      {loginModal && <Modal closeModal={setLoginModal} />}
      <Header openLoginModal={setLoginModal} />
      <Router>
        <Nav />
        <main>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/starships">
              <Starships />
            </Route>
            <Route path="/starships/:id">
              <Details />
            </Route>
          </Switch>
        </main>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
