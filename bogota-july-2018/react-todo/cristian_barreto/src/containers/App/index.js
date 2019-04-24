import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './main.css';

import Todo from '../../components/todo';

class App extends Component {
  render() {
    return (
      <Container fluid  className="App">
        <Row>
          <Col>
          <header className="App-header">
            <h1 className="App-title">TODO List</h1>
            <h2>Control your activities with a simple TODO list.</h2>
          </header>
          </Col>
        </Row>
        <Todo />
      </Container>
    );
  }
}

export default App;
