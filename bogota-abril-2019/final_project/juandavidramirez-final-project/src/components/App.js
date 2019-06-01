import React from "react";

import Header from "./Header/Header";
import Content from "./Content";
import Footer from "./Footer/Footer";

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
