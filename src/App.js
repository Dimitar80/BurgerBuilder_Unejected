// Root component
//Also we can turn this App component into the Layout and place into Index.js as Root component!
import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// import logo from "./logo.svg";
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div /*className="App"*/>
        {/* <h1>By default was function</h1> */}
        <Layout>
          {/* <p>Test</p> */}
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
