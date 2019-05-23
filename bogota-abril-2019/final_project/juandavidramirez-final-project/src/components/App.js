import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
