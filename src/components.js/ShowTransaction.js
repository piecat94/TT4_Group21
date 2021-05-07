import React from 'react'

const ShowTransaction = ({items}) =>{
    return(
        <table>
            <thead>
                <tr>
                    <td>eGift</td>
                    <td>DateTime</td>
                    <td>Customer ID</td>
                    <td>Amount</td>
                    <td>Message</td>
                    <td>Payee ID</td>
                    <td>Expense Category</td>
                </tr>
            </thead>

            <tbody>
                {items.map(e=>
                    <tr>
                        <td>{e.eGift}</td>
                        <td>{e.dateTime}</td>
                        <td>{e.custID}</td>
                        <td>{e.amount}</td>
                        <td>{e.message}</td>
                        <td>{e.payeeID}</td>
                        <td>{e.expenseCat}</td>
                    </tr>  
                    )}

            </tbody>
        </table>
    )
}

export default ShowTransaction
