
// import React, { useState, useEffect } from 'react'
// import { getData, getHtmlData } from '../api/API'
// import MasterTable from './MasterTable'
// import SearchData from './SearchBar'

// function Searcher(props) {
//     const [data, setData] = useState([])

//     const handleSearch = (event) => {
//         console.log(event.target.value)
//     }


//     useEffect(async ()=>{
//         const result = await getData()
//         setData(result)
//         //getHtmlData()
//       },[])

//     return (
//         <div>
//             <SearchData />
//             <MasterTable rows={data}/>
//         </div>
//     )
// }

// export default Searcher
