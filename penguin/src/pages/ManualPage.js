import React, { useEffect } from 'react'
import { getHtmlData } from '../api/API'
import { atom, useRecoilState } from 'recoil'
import { createHtmlDataState } from '../globalstate/atom'
import Navbar from '../components/Navbar'
const ManualPage = () => {

const [test, setTest] = useRecoilState(createHtmlDataState)
console.log(test)


    return (
        <div>
            <Navbar />
        </div>
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

