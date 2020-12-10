import React, { useEffect, useState } from 'react'
import { getHtmlData } from '../api/API'
import Navbar from '../components/Navbar'
import { getHtmlDataByCommand } from '../api/API'
import styles from './ManualPage.module.css'
import { Table, Container, Row } from 'react-bootstrap';



const ManualPage = ({ match }) => {
    let command = match.params.command;
    const [htmlData, setHtmlData] = useState({})
    useEffect(()=>{
        const data = async () => await getHtmlDataByCommand(command)
        let results = data().then(resp => setHtmlData(resp))

    }, [])

    const createMarkup = () => {
        return {__html: htmlData?.html?.trim().replace(/\n/g, "")
    .replace(/[\t ]+\</g, "<")
    .replace(/\>[\t ]+\</g, "><")
    .replace(/\>[\t ]+$/g, ">")}
    }

    //console.log(htmlData?.id)
    
    return (

        <>
            {htmlData ? <><Navbar />
            <div style={{paddingTop:"150px", fontSize: "14px", backgroundColor:"black", textAlign:"center"}}dangerouslySetInnerHTML={createMarkup()}></div>
            </> : <div style={{paddingTop:"150px"}}>LOADING</div>}
        </>
    )
}

export default ManualPage




















// import React, { useState, useEffect } from 'react'
// import { getData, getHtmlData } from '../api/API'

// const ManualPage = () => {

//     const [data, setData] = useState([])
//     const textState = atom({
//         key: 'textState', // unique ID (with respect to other atoms/selectors)
//         default: '', // default value (aka initial value)
//     });
//     // const createMarkup = (html_data) => {
//     //     return {__html: html_data}
//     // }
//     useEffect(async ()=>{
//         const result = await getHtmlData()
//         console.log(result)
//         setData(result)
//         console.log(data)
//     },[])

//     return (
//         <div></div>
//             // <div dangerouslySetInnerHTML={createMarkup(data[0]?.html)} style={{color:"whitesmoke"}}/>
//     )       

// }

// export default ManualPage

