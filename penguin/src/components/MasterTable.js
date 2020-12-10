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
  }
  const setFavorite = (event) => {
    //get command when favorite clicked
    let seen = null
    let oldItems = JSON.parse(localStorage.getItem('commandsArray')) || [];
    let command = event.target.parentNode.childNodes[1].innerText;
    //oldItems.includes(command) ? oldItems = oldItems.filter(word=>word!=command) : oldItems.push(command)
    if (oldItems.includes(command)){
      oldItems = oldItems.filter(word=>word!==command);
      seen = false;
    } else {
      oldItems.push(command)
      seen = true;
    }
    console.log(oldItems)
    localStorage.setItem('commandsArray', JSON.stringify(oldItems))
    console.log(seen)
    return seen

    // console.log(event.target.parentElement)//childNodes[1].value)
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
            <td style={{cursor: "pointer"}} onClick={ascify}>ascify</td>
            <td><Link to={`/manpage/${item?.command}`}>{item?.command}</Link></td>
            <td>{item?.description}</td>
            <td onClick={setFavorite}>favorites</td>
        </tr>
        ))}
  </tbody>
: null }
</Table> 
</Container>
    )
}
export default MasterTable