import React from "react"
import { Table, Tag, Space, Radio, Divider } from 'antd';
import { useEffect, useState } from "react"
import Axios from "axios"

const columns = [
  {
    title: 'Key',
    dataIndex: 'id',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Setup',
    dataIndex: 'setup',
  },
  {
    title: 'Punchline',
    dataIndex: 'punchline',
  },
  
];
/*
let oldData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];*/

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
    async function getTenJoke() {
        try {
          let res = await Axios({
            method: 'get',
            url: 'https://official-joke-api.appspot.com/random_ten'
          });
          console.log(res.data)
          
          setData(res.data)
        } catch (error) {
          console.log(error.response); // this is the main part. Use the response property from the error object
      
          return error.response;
        }
      
      }
      useEffect(() => {
          getTenJoke()

      }, [])
 

    return (
        <div>
            <h3>
                My Wallet
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