// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import {createStore, replaceReducer} from 'redux';

const initialState = {
  tasks: []
}

 function addReducer(state = initialState, action){
   switch (action.type) {
     case 'ADD_TASK':
       return{
         ...state,
         tasks: state.tasks.concat([action.payload.task])
       };
     default:
     return state;
   }
 }

 function resertReducer(state = initialState, action){
   switch (action.type) {
     case 'RESET_TASK':
       return{
         ...state,
         tasks: []
       };
     default:
       return state;
   }
 }

const store = createStore(addReducer);

function handleChange(){
  console.log(store.getState());
}

//const unsubscribe = store.subscribe(handleChange);
//unsubscribe();

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

store.dispatch(addTask('Storeを学ぶ'));
console.log(store.getState());


const resetTask = () => ({
  type: 'RESET_TASK',
});

store.replaceReducer(resertReducer);

store.dispatch(resetTask());
console.log(store.getState());

store.dispatch(addTask('Reducerを学ぶ'));
console.log(store.getState());
