import React, { useState } from "react"

import Login from "./Login"
import Nav from "./Nav"
import About from "./About"
import MyWallet from "./MyWallet"
import Dashboard from "./Dashboard"
import TransactionInfo from "./TransactionInfo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [isLogin, SetIsLogin] = useState(false)
  console.log(isLogin);

  return (
    //routing pathways 
    <Router>
    <div>
      {//isLogin?<Nav/>:null
      }
       <Route path = "/Dashboard" component = {Nav}/>
      <Switch>
        <Route path = "/" exact component = {()=><Login setLogin ={() => SetIsLogin(true)}/>}/>
        <Route path = "/Dashboard" exact component = {()=><Dashboard loginState = {isLogin}/>}/>
        <Route path = "/Dashboard/MyWallet"  component = {MyWallet} />
        <Route path ="/Dashboard/About"  component  = {About}/>
        <Route path ="/Dashboard/TransactionInfo"  component  = {TransactionInfo}/>
     
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
