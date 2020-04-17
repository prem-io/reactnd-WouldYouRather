import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import middleware from './middleware'

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = composeEnhancers(middleware)(createStore)

const persistedState = loadFromLocalStorage()

const store = createStoreWithMiddleware(rootReducer, persistedState)

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
