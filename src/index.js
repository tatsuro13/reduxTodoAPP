// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const initialState = {
  tasks: []
}
 function tasksReducer(state = initialState, action){
   switch (action.type) {
     case 'ADD_TASK':
       return{
         ...state,
         tasks: state.tasks.concat([action.task])
       };
       break;
     default:
     return state;
   }
 }
