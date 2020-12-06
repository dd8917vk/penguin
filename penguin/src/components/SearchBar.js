import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { getData, getHtmlData } from '../api/API'
import MasterTable from './MasterTable'

const SearchBar = styled.input`
    display:block;
    margin: auto auto;
    margin-bottom: 20px;
    width: 96%;
    height: 5rem;
    font-size: 2rem;
    text-align: center;
    border: 0;
    outline: none;
    color: #00FF41;
    border: 2px solid #00FF41;
    background-color: #0D0208;
    border-radius: 2px;
`


export default function SearchData(props) {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [searchText, setSearchText] = useState('')
    
    const handleSearch = (event) => {
        setSearchText(event.target.value.toLowerCase()); 
        if (searchText !== ""){
            setFilteredData(data.filter(item=>{
                const lc = item.command.toLowerCase();
                return lc.includes(searchText);
            }))
        } 
    }
    useEffect(async ()=>{
        const result = await getData()
        setData(result)
        setFilteredData(result)
        console.log('use effect ran')
        //getHtmlData()
      },[])

    return (
    <div>
    <form className="inputPlain">
        <SearchBar onChange={(event) => handleSearch(event)}/>
        <MasterTable rows={filteredData.slice(0,100)}/>
    </form>
    </div>
    )
}
