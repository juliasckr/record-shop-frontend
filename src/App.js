import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import Records from "./components/Records";
import Signup from "./components/Signup";
import Container from "./context/Container";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <div className="App">
          <h1>record shop express server</h1>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/records" component={Records} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
