import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Adding redux
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducer from './components/reducer/reducer';
// adding Middleware
import thunk from "redux-thunk"
let logger = store=>{
  return next=>{
    return action=>{
      console.log("[middleware dispatching]",action)
      let result = next(action)
      console.log("Middileware nextState",store.getState())
      
      return result
    }
  }
}
//creating store
let store = createStore(reducer,applyMiddleware(logger,thunk))
ReactDOM.render(
  //Adding redux to the react using Provider
 <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
 </Provider>,
  document.getElementById('root')
);

