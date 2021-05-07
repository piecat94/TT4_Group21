import React, { Component } from 'react'
import axios from 'axios'
import {ShowTransaction} from "./ShowTransaction"

class TransactionInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             custID: '',
             payeeID: '',
             date: '',
             amount: '',
             eGift: '',
             message: '',
             expenseCat: ''
        }
    }
    

    componentDidMount(){
        this.callAPI()
    } 

    //call API 
    callAPI(){
        var axios = require('axios');
        var data = JSON.stringify({
        "custID": 21,
        "accountKey": "v8f9qys7-t3ru-81jm-pqb4-7qngr7rna5i"
        });

        var config = {
        method: 'post',
        url: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',
        headers: { 
            'x-api-key': 'PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(response=>{
            this.setState({items: response.data})
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });

        render() {
            return (
                <div>
                    <h1>Transaction Details</h1>
                    <ShowTransaction items = {this.items}/>
                </div>
            )
        }
    }
    
}

export default TransactionInfo

