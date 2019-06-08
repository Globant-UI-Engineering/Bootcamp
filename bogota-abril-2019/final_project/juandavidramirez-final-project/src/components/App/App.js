import React from "react";

import Header from "../Header/Header";
import Content from "../Others/Content";
import Footer from "../Footer/Footer";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="site">
        <div>
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
