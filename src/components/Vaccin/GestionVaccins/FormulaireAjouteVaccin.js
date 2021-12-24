import React, { useState } from "react";
import { DatePicker, Select, Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/vaccin/vaccin"

function FormulaireAjouteVaccin (){
    const dispatch = useDispatch()
  const [marque_vaccin, setMarque_vaccin] = useState("")
  const [date_production, setDate_production] = useState("")
  const [date_validite, setDate_Validite] = useState("")
  const [stocke, setStocke] = useState("")

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
        ajoutevaccin(values.marque_vaccin, values.date_production, values.date_validite, values.stocke)
      };

      const ajoutevaccin = (marque_vaccin, date_production, date_validite, stocke ) => {
        console.log(marque_vaccin, date_production, date_validite, stocke)
        dispatch(actions.ajoutevaccin({marque_vaccin, date_production, date_validite, stocke}))}
    return (
        <div style={{padding: 200, margin: 50}}>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
    
  <Form.Item name="marque_vaccin" label="Marque de vaccin"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={marque_vaccin} onChange={(e) => setMarque_vaccin(e.target.value)}/>
          </Form.Item>
          <Form.Item name="date_production" label="Date de production">
        <DatePicker />
      </Form.Item>
      <Form.Item name="date_validite" label="Date de validation">
        <DatePicker />
      </Form.Item>
          <Form.Item name="stocke" label="Stocke"
         rules={[
            {
              type: 'number',
              required: true
            },
          ]}>
        
            <InputNumber />
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
export default FormulaireAjouteVaccin