import React, {useState, useEffect} from "react"
import Axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Dashboard(props){

    // Setting state with hooks useState function
  const [acctdetails, setAcct] = useState([])
  
  let temp  = "Temporary"

    // Calling API using Axios + useEffect
    
    async function getAcct() {
      try {
        let res = await Axios({
          method: 'POST',
          url: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
          headers: {'x-api-key': 'PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5'},
          data: {"userName": "Group21","userPass": "mZNcE%K2IPzZJqp"}
        });
        console.log(res.data)
        
        // let data = res.data;
        setAcct(res.data)
        console.log(acctdetails)


      } catch (error) {
        // console.log(error.response); // this is the main part. Use the response property from the error object
    
        return error.response;
      }
    
    }
    
        useEffect(() => {
          getAcct()
          
          // setInterval(() => {
          //   getJoke()
          // }, 1); 
      }, [])
 

// console.log(props.loginState)
  
    return(

        <div>
            <h1>
                Main page
            </h1>
            {/* <button onClick = {getJoke}>Get Joke</button> */}
            <p> {acctdetails.firstName} {acctdetails.lastName}</p>
            <p> {acctdetails.email} </p>
            <p> {acctdetails.address} </p>
            <p> {acctdetails.nric} </p>
            {/* {props.loginState?<h1>True</h1>:<h1>False</h1>} */}

        </div>
    )
}

export default Dashboard