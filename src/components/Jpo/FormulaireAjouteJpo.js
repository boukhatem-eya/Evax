import React, { useState } from "react";
import { DatePicker, Select, Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/jpo/jpo"

function FormulaireAjouteJpo (){
    const dispatch = useDispatch()
  const [dateJpo, setDateJpo] = useState("")
  

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
      const onFinish = (values) => {
        ajoutejpo(values.dateJpo)
      };

      const ajoutejpo = (dateJpo ) => {
        console.log(dateJpo)
        dispatch(actions.ajoutejpo({dateJpo}))}
    return (
        <div style={{padding: 200, margin: 50}}>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
    
  


          <Form.Item name="dateJpo" label="Ajouter la date de journée porte ouverte">
              <DatePicker />
          </Form.Item>
      
        
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
            </Form.Item>
          </Form>
  </div>
   
    )
}
export default FormulaireAjouteJpo