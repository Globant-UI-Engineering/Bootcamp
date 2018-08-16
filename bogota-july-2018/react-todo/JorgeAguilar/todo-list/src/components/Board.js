import React, { Component } from 'react';
import '../assets/styles/Board.css';
import ToDo from './ToDo';
import ToDoing from './ToDoing';
import ToDone from './ToDone';

class Board extends Component {
  render() {
    return (
      <section className="Board">
        <article className="list-wrapper">
            <ToDo />
        </article>
        <article className="list-wrapper">
            <ToDoing />
        </article>
        <article className="list-wrapper">
            <ToDone />
        </article>
      </section>
    );
  }
}

export default Board;
