import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import FirebaseApp from './firebaseApp';
// import App from './example/dragAndDrop';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxsONU9IRW4ls5MCXvA4ie0sZyElC26aE",
    authDomain: "todo-on-react.firebaseapp.com",
    databaseURL: "https://todo-on-react.firebaseio.com",
    projectId: "todo-on-react",
    storageBucket: "",
    messagingSenderId: "1076528486199"
};
firebase.initializeApp(config);


// var user = {
//     name: 'Irfan',
//     hobbies: ['Mango', 'Apple', 'Banana']
//   };
// ReactDOM.render(<App user={user} />, document.getElementById('root'));

ReactDOM.render(<FirebaseApp/>, document.getElementById('root'));
registerServiceWorker();
