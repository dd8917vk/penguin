import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { getData, getHtmlData } from '../api/API'
import MasterTable from './MasterTable'
import Stats from './Stats'
import { atom, useRecoilState } from 'recoil'
import { createHtmlDataState } from '../globalstate/atom'

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
    //const [htmlData, setHtmlData] = useState([])
    
    const [htmlData, setHtmlData] = useRecoilState(createHtmlDataState)
    
    const handleSearch = (event) => {
        setSearchText(event.target.value.toLowerCase()); 
        if (searchText !== ""){
            setFilteredData(data.filter(item=>{
                const command = item.command.toLowerCase();
                return command.includes(searchText);
            }).sort((a,b)=>a.command.length-b.command.length))
        }
    }
    useEffect(async ()=>{
        let isMounted = true;
        if(isMounted){
            const result = await getData()
            setData(result)
            setFilteredData([])
            const htmlResult = await getHtmlData()
            setHtmlData(htmlResult)
        }
        return function cleanup(){
            isMounted = false;
        }
      },[])

    return (
    <div>
    <form className="inputPlain">
        <SearchBar onChange={(event) => handleSearch(event)} placeholder={'->MY MAN LINNY<-'}/>
        <Stats dataLength={filteredData.length}/>
        <MasterTable rows={filteredData.slice(0,30)}/>
    </form>
    </div>
    )
}
