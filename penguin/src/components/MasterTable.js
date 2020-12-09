import React from 'react'
import { Table, Container, Row } from 'react-bootstrap';
import styles from './MasterTable.module.css'
import { Link } from 'react-router-dom'

const MasterTable = (props) => {
  const ascify = (event) => {
    let baseUrl = 'https://artii.herokuapp.com/make?text='
    // let siblingNode = event.target.nextSibling.childNodes[0].nodeValue;
    let siblingNode = event.target.nextSibling.children[0].childNodes[0].nodeValue
    console.log(siblingNode)
    let apiCall = `${baseUrl}+${siblingNode}`
    window.open(apiCall, "_blank")
// console.log(event)
  }
    return (
<Container fluid>
  <Table striped bordered hover variant="dark" size="sm">
  <thead>
    <tr style={{color:"#008F11"}}>
      <th>ascify</th>
      <th>command</th>
      <th>description</th>
      <th>favorite</th>
    </tr>
  </thead>
  {props.searchText.length > 0 ? 
  <tbody>
      {props.rows?.map((item, index)=> (
        <tr key={index}>
            <td style={{cursor: "pointer"}}onClick={ascify}>ascify</td>
            <td><Link to={`/manpage/${item?.command}`}>{item?.command}</Link></td>
            <td>{item?.description}</td>
            <td>favorites</td>
        </tr>
        ))}
  </tbody>
: null }
</Table> 
</Container>
    )
}
export default MasterTable