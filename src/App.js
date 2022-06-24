import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/class_based/home";
import TopRepositories from "./pages/class_based/top_ repositories";
import "./scss/main.scss";

const App = () => {
  return(
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/top_repositories" element={<TopRepositories />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App;
