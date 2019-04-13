import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from './components/App';
import reducers from './reducers';
import { addTodo } from "./actions"


const store = createStore(reducers);
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo('aerstdh'));
unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);



// View -> Action -> Reducer(s) -> Store -> View