import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const link = [ 
    { to: '/', name: 'todo', title: 'To-Do'},
    { to: '/universidad', name: 'universidad', title: 'Universidad'},
];

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: 'todo'
    };
  }

  handleClick = (e) => { this.setState({ active: e.target.name }) };

  render() {
      const { active } = this.state;
      const actived = 'side-bar__btn side-bar__btn--active';
    return (
        <nav className="side-bar">
            <ul className="side-bar__list">
                { link.map( (item, key) => 
                    <li className="side-bar__item" key={key}>
                        <Link 
                            className={active === item.name ? actived :'side-bar__btn'} 
                            to={item.to} 
                            name={item.name} 
                            onClick={this.handleClick}>
                            {item.title}
                        </Link>
                    </li> )
                }
            </ul>
        </nav>
    );
  }
}

export default NavigationBar;