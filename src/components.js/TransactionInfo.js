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
             message: ''
        }
    }
    
    render() {
        return (
            <div>
                <ShowTransaction/>
            </div>
        )
    }
}

export default TransactionInfo
