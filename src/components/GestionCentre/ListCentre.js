import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/centre/centre'

// exemlpe avec table modifier et supprimer ne fonctionne pad
function ListCentre(){

const centres = useSelector((state) => state.gestioncentre.list)
console.log(centres)
const dispatch = useDispatch()
useEffect(() => {
    dispatch(actions.affichcentres())
  }, [])
const columns = [
  {
    title: 'Gouvernant',
    dataIndex: 'gouvernant',
    key: 'commune',
  },
  {
    title: 'Delegation',
    dataIndex: 'delegation',
    key: 'delegation',
  },
  {
    title: 'Commune',
    dataIndex: 'commune',
    key: 'commune',
  },
  {
    title: 'Libellé',
    dataIndex: 'libelle_fr',
    key: 'libelle_fr',
  },
  {
    title: 'Type de centre',
    dataIndex: 'type_centre_vaccination',
    key: 'type_centre_vaccination',
  },
  {
    title: 'Adresse',
    dataIndex: 'adresse_francais',
    key: 'adresse_francais',
  },
  {
    title: 'Capacité',
    dataIndex: 'capacite_accueil',
    key: 'capacite_accueil',
  },
  {
    title: 'Stocke',
    dataIndex: 'stocke',
    key: 'stocke',
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
        <Button>Supprimer</Button>
        <Button>Modifier</Button>
        <Button>Afficher</Button>
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

return(<Table columns={columns} dataSource={centres} />)
}
export default ListCentre;