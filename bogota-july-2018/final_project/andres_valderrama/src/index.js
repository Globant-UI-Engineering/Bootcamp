import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import HangMan from './Hangman'

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <HangMan />
  </Provider>,
  document.getElementById('root'))


// https://stackoverflow.com/q/35411423/35415559#35415559
