import React, { useState, useEffect } from 'react'
import { Table, Container, Row } from "react-bootstrap";

const FavoriteTable = () => {
    const [favorites, setFavorites] = useState([]) 

    useEffect(()=>{
        renderFavorites()
    }, [])

    const deleteFavorite = (event) => {
        event.preventDefault()
        let oldItems = JSON.parse(localStorage.getItem("commandsArray")) || [];
        let command = event.target.id//.childNodes[2].innerText;
        const checkExists = obj => obj.command === command;
        const result = oldItems.filter(item=>item.command !== command)
        setFavorites(result)
        localStorage.setItem("commandsArray", JSON.stringify(result))
        console.log(localStorage)
		    // if (oldItems.some(checkExists)) {
            //     console.log(oldItems[item])
		    // }
    }

    const renderFavorites = () => {
        let oldItems = JSON.parse(localStorage.getItem("commandsArray")) || [];
        setFavorites(oldItems)
        console.log(favorites)


    }

    return (
        <div style={{marginTop:"80px"}}>
            <Table striped bordered hover variant="dark" size="sm">
				<thead>
					<tr style={{ color: "#008F11" }}>
						<th>command</th>
						<th>description</th>
						<th>remove</th>
					</tr>
				</thead>
					<tbody>

                    </tbody>
                        {favorites.map((item, index)=>{
                            return ( 
                            <tr>
                                <td>{item.command}</td>
                                <td>{item.description}</td>
                                <td><button id={item.command} onClick={deleteFavorite} style={{color:"black"}}>remove</button></td>
                            </tr>)
                        })}
						{/* {props.rows?.map((item, index) => (
							<tr key={index}>
								<td style={{ cursor: "pointer" }} onClick={ascify}>
									ascify
								</td>
								<td>
									<Link to={`/manpage/${item?.command}`}>{item?.command}</Link>
								</td>
								<td>{item?.description}</td>
								<td onClick={isFavorite}>favorites</td>
							</tr>
						))}
					</tbody>
				) : null} */}
			</Table>
        </div>
    )
}

export default FavoriteTable
