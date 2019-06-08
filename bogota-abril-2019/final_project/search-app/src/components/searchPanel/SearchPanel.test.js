import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './SearchPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
