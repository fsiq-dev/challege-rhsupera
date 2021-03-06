import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './config/globalStyle'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
)
reportWebVitals()
