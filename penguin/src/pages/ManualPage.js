import React, { useState, useEffect } from 'react'
import API, { getHtmlData } from '../api/API'


const ManualPage = () => {

    const [data, setData] = useState([])
    const createMarkup = (html_data) => {
        return {__html: html_data}
    }
    useEffect(async ()=>{
        const result = await getHtmlData()
        setData(result)
        console.log(data[0]?.html)
    },[])

    return (
            <div dangerouslySetInnerHTML={createMarkup(data[0]?.html)} style={{color:"whitesmoke"}}/>
    )       

}

export default ManualPage

