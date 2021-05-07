import React, {useState, useEffect} from "react"
import Axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function About(){
    const [data, setData] = useState("")
    const [custID, setCustID]= useState(21)
    const [payeeID, setPayeeID]= useState(12)
    const [amount, setAmount]= useState(300)
    const [message, setMessage]= useState("")
    const [isEGift, setIsEGift] = useState(false)
  
    async function AddOneTransaction(props) {
        try {
          let res = await Axios({
            method: 'post',
            url: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add'
            ,
            headers: {
               "x-api-key": "PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5"
            }
            ,
            data: {
              custID: 21,
              accountKey: "v8f9qys7-t3ru-81jm-pqb4-7qngr7rna5i",
              payeeID: 12,
                amount: 300,
                eGift: false,
                message: "cool"
            }
          });
          console.log(res.data)
          
          setData(res.data)
        } catch (error) {
          console.log(error.response); // this is the main part. Use the response property from the error object
      
          return error.response;
        }
      
      }

      console.log(message)
    return(
        <div>
            <h3>
                Enter Transaction Details:
            </h3>
            <br />
            <input 
                        
                        name="Customer ID" 
                        onChange={event => setCustID(event.target.value)}
                        placeholder="Customer ID" 
                    />
                    <br />
                    <input 
                    
                        name="Payee ID" 
                        onChange={event => setPayeeID(event.target.value)}
                        placeholder="Payee ID" 
                    />
                    <br />
                    <input 
                    
                        name="Amount" 
                        onChange={event => setAmount(event.target.value)}
                        placeholder="Amount" 
                    />
                    <br />
                    <input 
                    
                        name="Message" 
                        onChange={event => setMessage(event.target.value)}
                        placeholder="Add a note to the payee" 
                    />
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="EGift"
                            value="EGift"
                            checked= {isEGift}
                            onChange={() => isEGift?setIsEGift(false):setIsEGift(true)}
                            
                            
                            
                        /> 
                        Send E-Gift?
                    </label>
                    <br />
                    <br />
                    <br />
                    
            <button onClick = {AddOneTransaction}>Add the transaction!</button>
            <h3>Status: {data.message} </h3>
        </div>
    )
}
export default About