import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState2 = {
  "user": {},
  "myList": [],
  "trends": [],
  "originals": [],
  "transactions": [
    {
      "fromAccount": 123456789,
      "toAccount": 192837465,
      "amount": {
        "currency": "€",
        "value": 876.88
      },
      "sentAt": "2012-04-23T18:25:43.511Z"
    },
    {
      "fromAccount": 123456789,
      "toAccount": 192837465,
      "amount": {
        "currency": "€",
        "value": 654.88
      },
      "sentAt": "2012-04-21T18:25:43.511Z"
    },
    {
      "fromAccount": 987654321,
      "toAccount": 543216789,
      "amount": {
        "currency": "$",
        "value": 543
      },
      "sentAt": "2012-04-23T18:25:43.511Z"
    },
    {
      "fromAccount": 987654321,
      "toAccount": 543216789,
      "amount": {
        "currency": "$",
        "value": 987.54
      },
      "sentAt": "2012-04-23T18:25:43.511Z"
    }
  ],
  "balance": [
    {
      "account": 123456789,
      "balance": {
        "currency": "€",
        "value": 765095.54
      },
      "owner": 7612333392,
      "createdAt": "2012-04-23T18:25:43.511Z"
    },
    {
      "account": 987654321,
      "balance": {
        "currency": "$",
        "value": 524323.54
      },
      "owner": 7612333392,
      "createdAt": "2012-04-23T18:25:43.511Z"
    }
  ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState2, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);