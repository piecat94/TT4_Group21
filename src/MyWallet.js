import React from "react"
import { Table, Tag, Space, Radio, Divider } from 'antd';
import { useEffect, useState } from "react"
import Axios from "axios"

const columns = [
  {
    title: 'Name',
    dataIndex: 'accountName',
  },
  {
    title: 'Account Number',
    dataIndex: 'accountNumber',
  },
  {
    title: 'Balance',
    dataIndex: 'availableBal',
  },
 
  
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};


function MyWallet(){

    const [data, setData] = useState("");
    const [selectionType, setSelectionType] = useState('checkbox');
    async function getWalletInfo() {
        try {
          let res = await Axios({
            method: 'post',
            url: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts'
            ,
            headers: {
               "x-api-key": "PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5"
            }
            ,
            data: {
              custID: 21,
              accountKey: "v8f9qys7-t3ru-81jm-pqb4-7qngr7rna5i"
            }
          });
          console.log(res.data)
          
          setData(res.data)
        } catch (error) {
          console.log(error.response); // this is the main part. Use the response property from the error object
      
          return error.response;
        }
      
      }
      useEffect(() => {
          getWalletInfo()

      }, [])
 

    return (
        <div>
            <h3>
                My Account
            </h3>
            <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
            
        </div>
    )
}
export default MyWallet