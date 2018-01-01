// import React, { Component } from 'react';
// // import logo from './logo.svg';
// // import './App.css';
import 'jquery';
import $ from 'jquery';
// import firebase from 'firebase';
// import 'firebase/database';
import 'materialize-css'
import 'uikit'
// var config = {
//     apiKey: "AIzaSyDD-ZJUnHF7EE_DHtMDf-GKw0OEzqDy9HQ",
//     authDomain: "todo-app-ec50f.firebaseapp.com",
//     databaseURL: "https://todo-app-ec50f.firebaseio.com",
//     projectId: "todo-app-ec50f",
//     storageBucket: "todo-app-ec50f.appspot.com",
//     messagingSenderId: "982617350379"
// };
// firebase.initializeApp(config);

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: "",
//             details: "",
//             todo: []
//         }
//         this.addTodo = this.addTodo.bind(this)
//         this.titleForm - this.titleForm.bind(this)
//         this.detailsForm = this.detailsForm.bind(this)

//         // firebase.database().ref('/').child('todo').on("child_added",(snap)=> {
//         //     let obj = snap.val();
//         //     obj.id = snap.key
//         //     console.log(obj)
//         //     this.state.todo.push(obj)
//         //     console.log(obj)
//         //     this.setState({ todo: this.state.todo })
//         //   })        

//     }

//     titleForm = (ev) => {

//         this.setState({
//             title: ev.target.value
//         })
//         // console.log(this.state.title)
//     }

//     detailsForm = (ev) => {
//         this.setState({
//             details: ev.target.value
//         })
        
//     }
    
    // addTodo(ev) {
    //     let todoClone = this.state.todo
    //     todoClone.push({
    //         title: this.state.title,
    //         details: this.state.details
    //     })
       
        
    //     this.setState({
    //         todo: todoClone,
    //     })
    //     firebase.database().ref("/").child("todo").push(this.state.todo)
        
    //     console.log(this.state.todo)
    // }
    
//     render() {
//      return (
//             <div>
//                 <div className="row">
//                     <h1>Create Your Todo</h1>
// {/*******FORM********************************/}
                    // <form className="col s3">
                    //     <div className="row">
                    //         <div className="input-field col s12">
                    //             <input id="first_name" type="text" value={this.state.title} className="validate" onChange={this.titleForm} />
                    //             <label htmlFor="first_name">Title</label>
                    //         </div>
                    //         <div className="row">
                    //             <div className="input-field col s12">
                    //                 <input id="last_name" value={this.state.details} onChange={this.detailsForm} type="text" className="validate" />
                    //                 <label htmlFor="last_name">Description</label>
                    //             </div>
                    //         </div>

                    //         <div className="row">
                    //             <a onClick={this.addTodo} className="waves-effect waves-light btn blue">Add</a>
                    //         </div>
                    //     </div>
                    // </form>
//                 </div>
// {/*******FORM********************************/}
                
//                 <div className="row">
                
                
                
//                     <div className="col s3 #1de9b6 teal accent-3" uk-grid="true">

//                         <div>
//                             <h4 className="white-text center">Todo</h4>
//                             <div uk-sortable="group: sortable-group">
//                                 {
//                                     this.state.todo.map((val, ind) => {
//                                         console.log(val)
//                                         return (
//                                             <div className="uk-card uk-card-default">
//                                                 <div className="uk-card-header">
//                                                     <div className="uk-grid-small uk-flex-middle" uk-grid="true">
//                                                         <div className="uk-width-auto">

//                                                         </div>
//                                                         <div className="uk-width-small">

//                                                             <h3 key={ind} className="uk-card-title black-text uk-margin-remove-bottom">{val.title}</h3>

//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="uk-card-body">
//                                                     <p key={ind}>{val.details}</p>
//                                                 </div>

//                                                 <div className="uk-card-footer">
//                                                     <button className="uk-button uk-button-text"><i className="material-icons">delete</i></button>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                             </div>
//                         </div>

//                     // </div>




//                     <div className="col s3 #aeea00 lime accent-4">
//                         <div>
//                             <h4 className="white-text center">Doing</h4>
//                             <div uk-sortable="group: sortable-group">

//                             </div>
//                         </div>
//                     </div>

//                     <div className="col s3 #37474f blue-grey darken-3">
//                         <div>
//                             <h4 className="white-text center">Review</h4>
//                             <div uk-sortable="group: sortable-group">

//                             </div>
//                         </div>
//                     </div>

//                     <div className="col s3 #0d47a1 blue darken-4">
//                         <div>
//                             <h4 className="white-text center">Done</h4>
//                             <div uk-sortable="group: sortable-group">

//                             </div>
//                         </div>
// //                     </div>
                // </div>

            // </div>
//         );
//     }
// }

// export default App;

/*************************************************************************/ 
/*************************************************************************/ 
/*************************************************************************/ 


import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import firebase from "firebase"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD51lsS3qzcfWGYfu-PZ2Z8Zk-CxgOo5OI",
    authDomain: "react-todo-app-2bc91.firebaseapp.com",
    databaseURL: "https://react-todo-app-2bc91.firebaseio.com",
    projectId: "react-todo-app-2bc91",
    storageBucket: "react-todo-app-2bc91.appspot.com",
    messagingSenderId: "53429628893"
  };
  firebase.initializeApp(config);



class App extends Component{
    constructor(){
        super()

        this.state={
            title:"",
            detail:"",
            other:"",
            todos:[],
        }
        this.titleChangeHandler = this.titleChangeHandler.bind(this)
        this.detailChangeHandler = this.detailChangeHandler.bind(this)
        this.otherChangeHandler = this.otherChangeHandler.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    titleChangeHandler(event){
       
        this.setState({
            title:event.target.value
        })
       
    }

    detailChangeHandler(event){
       
        this.setState({
            detail:event.target.value
        })
       
    }
    
    otherChangeHandler(event){
       
        this.setState({
            other:event.target.value
        }) 
    }

    addTodo(event){
        let todosArry = this.state.todos
          todosArry.push({
            title:this.state.title,
            detail:this.state.detail,
            other:this.state.other,
          })

          this.setState({
               todos:todosArry,
            })  

         firebase.database().ref("/").child("Todos").push(this.state.todos)   
            
       }


    render(){
       
        return(
            <div> 
                <div className="form_div">
                   <input className="uk-input browser-default" type="text" placeholder="Title" value={this.state.title} onChange={this.titleChangeHandler} />
                   <br />
                   <input className="uk-input browser-default" type="text" placeholder="Detail" value={this.state.detail} onChange={this.detailChangeHandler} />
                   <br />                   
                   <input className="uk-input browser-default" type="text" placeholder="Other" value={this.state.other} onChange={this.otherChangeHandler} />
                   <br />                                      
                   <button className="uk-button uk_button_group uk-button-primary uk-width-1-1 uk-margin-small-bottom"
                    onClick={this.addTodo} >Submit</button>
                </div>

                <div className="row">
                  <div className="col s3 #1de9b6 pink lighten-2" uk-grid="true">

                        <div>
                            {/* <h4 className="white-text center">Todo</h4> */}
                            <div uk-sortable="group: sortable-group">
                                {
                                    this.state.todos.map((val, ind) => {
                                        console.log(val)
                                        return (
                                            <div key={ind} className="uk-card uk-card-default ">


                                                <div className="uk-card-header ">
                                                    <div className="uk-grid-small uk-flex-middle " uk-grid="true">
                                                        
                                                         {/* {<div className="uk-width-auto">
                                                        </div> } */}

                                                        <div className="uk-width-small">
                                                            <h3 key={ind} className="uk-card-title black-text uk-margin-remove-bottom">{val.title}</h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                        
                                                <div className="uk-card-body">
                                                    <p key={ind}>{val.detail}</p>
                                                </div>

                                                <div className="uk-card-body">
                                                    <p key={ind}>{val.other}</p>
                                                </div>

                                                <div className="uk-card-footer todo_card">
                                                    <button className="uk-button uk-button-text"><i className="material-icons">delete</i></button>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>

                     </div>




                    <div className="col s3 blue darken-2">
                        <div className="card-div" >
                            <h4 className="white-text center">Doing</h4>
                            <div uk-sortable="group: sortable-group">

                            </div>
                        </div>
                    </div>

                    <div className="col s3 green">
                        <div className="card-div">
                            <h4 className="white-text center">Review</h4>
                            <div uk-sortable="group: sortable-group">

                            </div>
                        </div>
                    </div>

                    <div className="col s3 deep-orange ">
                        <div className="card-div">
                            <h4 className="white-text center">Done</h4>
                            <div uk-sortable="group: sortable-group">

                            </div>
                        </div>
                     </div>


               </div>
            </div>
        )
    }
}
export default App;
/*****************************************/
/*****************************************/
/*****************************************/

// class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             val:0,
//         }

//     }
//     componentWillMount(){
//         console.log("Did Mount")
        
//         this.setState({abc: 2})
//     }
//     componentDidMount(){
//         console.log("Did Mount")
//     }
//     componentWillUpdate(newProps, newState){
//         console.log(`newState ${newState.val}`)
//     }
    
//     componentDidUpdate(oldProps, oldState) {
//         console.log(`newState ${oldState.val}`)
//     }

//     shouldComponentUpdate(){
//         console.log()
//         // return this.state.val % 5 === 0;
//         if(this.state.val < 10){
//            return true;
//         }
//     }


//     update(){
//     this.setState({val:this.state.val + 1})
//     }
//     render(){
//         return(
//             <div className="App">
//                <h1 >{this.state.val}</h1>
//                <button onClick={this.update.bind(this)}>Add</button>
//             </div>
//         )
//     }
// }

// export default App;