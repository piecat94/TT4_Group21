import React, {useState} from "react"
import LoginForm from "./LoginForm"
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
function Login(props){


  console.log(props)

  const onFinish = (values) => {

    if (values.username === "Group21" && values.password === "mZNcE%K2IPzZJqp") {
      console.log('Success:', values);
      props.history.push('/Dashboard');
      props.setLogin(); }
    else {alert("Wrong Username/Password");
    return;}
    
  };

  

    return(
        <div className="App">
        
      <header className="App-header">
      
		<h3>Login Page</h3>
        <LoginForm setLogin = {props.setLogin} 
        onFinish = {onFinish}/>
        
        
      </header>
      
    </div>
    )    
}

export default withRouter(Login)