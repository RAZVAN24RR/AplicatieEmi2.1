import React from "react";
import Home from "./Components/Home";
import Logo from "./Components/Logo";
import Login from "./Components/Login";
import MovieDetail from "./Components/Movie/index.js";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";
import MovieAlt from "./Components/Movie/Movie";
import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Logo />

      {/* <h1>Aplicatie</h1> */}
      <Router basename={process.env.PUBLIC_URL}>
        {/* <Link to="/">Login</Link>
        <Link to="/Components/Home">Home</Link>
        <Link to="/Components/Movie">Movie</Link>
        <Link to="/Components/MovieList">MovieList</Link> */}
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/Components/Home">
            <Home />
          </Route>
          <Route path="/Components/Movie">
            <MovieDetail />
          </Route>
          <Route path="/Components/MovieList">
            <MovieList />
          </Route>
          <Route
            path="/Components/Movie/MovieDetail/:movieID"
            component={() => <MovieDetail />}
          />
          {/* <Route
            path="/Components/Movie/index.js/:movieID-1"
            component={MovieDetail}
          />
          <Route
            path="/Components/Movie/index.js/:movieID+1"
            component={MovieDetail}
          /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
