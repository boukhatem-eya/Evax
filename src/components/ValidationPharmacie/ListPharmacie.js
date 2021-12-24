import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/validation/validation'

// exemple affichage avec table supprimer et modifier non fonctionne
function ListPharmacie(){

const pharmacies = useSelector((state) => state.validationpharmacie.list)
console.log(pharmacies)
const dispatch = useDispatch()
useEffect(() => {
    dispatch(actions.affichepharmacies())
  }, [])
const columns = [
  {
    title: 'Nom pharmacie',
    dataIndex: 'nom_pharmacie_francais',
    key: 'nom_pharmacie_francais',
  },
  {
    title: 'Num Ordre',
    dataIndex: 'num_ordre',
    key: 'num_ordre',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Catégorie',
    dataIndex: 'categorie',
    key: 'categorie',
  },
  {
    title: 'Verifier',
    dataIndex: 'verifier',
    key: 'verifier',
  },
//   {
//     title: 'Etat',
//     key: 'verifier',
//     dataIndex: 'verifier',
//     render: tags => (
//       <>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a>Valider</a>
      </Space>
    ),
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

return(<Table columns={columns} dataSource={pharmacies} />)
}
export default ListPharmacie;