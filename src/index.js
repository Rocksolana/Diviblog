import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import App from './App/App'
import {createStore} from 'redux'
import { productLikeReducer } from './Redux/likeReducer'

const store = createStore(
  productLikeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render (
    <Provider store={store}>
      <BrowserRouter>
       <App/>
     </BrowserRouter>
</Provider>
,
document.getElementById("root"))