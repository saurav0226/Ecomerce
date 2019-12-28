import React from "react";
import "./Styles/App.css";
import Home from "./Components/App/Home/Home";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IS_MOBILE } from "./Constants/AppConfig";
function App() {
  return (
    <div>
      <Header left={IS_MOBILE && <button>Hello</button>}>
        {/* <div style={{ height: 40, background: "white" }}></div> */}
      </Header>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
