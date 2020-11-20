import React, { useEffect } from "react";
import theme from "./theme/theme";
import ListPage from "./pages/Listpage";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "./components/Container";
import Details from "./pages/details";
import Watch from "./pages/watch";
import Error from "./pages/404";
import Home from "./pages/homepage";
import styled from "styled-components";
import { RiUserHeartLine,RiImageAddLine } from "react-icons/ri";
import { TiThListOutline } from "react-icons/ti";
const Heading = styled.h1`
  color: white;
`;

function App() {
  useEffect(() => {
    setInterval(() => {
      fetch("https://anime-x.herokuapp.com/").then((res) => res.json());
    }, 1500000);
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/popular/:page" exact>
              <Heading><RiUserHeartLine size='1.2em' style={{position: 'relative',top: '6px',right: '4px'}} /> Popular</Heading>
              <Container />
            </Route>
            <Route path="/recentlyadded/page/:page" exact>
              <Heading><RiImageAddLine size='1.2em' style={{position: 'relative',top: '6px',right: '4px'}}/>Recently Added</Heading>
              <Container />
            </Route>
            <Route path="/search/:query/:page" exact>
              <Heading>Search Results </Heading>
              <Container />
            </Route>
            <Route path="/genre/:query/:page" exact>
              <Heading>Genre</Heading>
              <Container />
            </Route>
            <Route path="/list/:vari/:page">
              <Heading><TiThListOutline size='1.2em' style={{position: 'relative',top: '6px',right: '4px'}}/>Anime List</Heading>
              <ListPage />
            </Route>

            <Route path="/details/:id" exact>
              <Heading>Details</Heading>
              <Details />
            </Route>
            <Route path="/watch/:id/:ep" exact>
              <Watch />
            </Route>
            <Route path="/error" exact>
              <Error />
            </Route>
            <Route path="*" status={404}>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
