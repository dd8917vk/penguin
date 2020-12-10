import React, { useState, useEffect } from 'react'
import { Table, Container, Row } from "react-bootstrap";

const FavoriteTable = () => {
    const [favorites, setFavorites] = useState([]) 

    useEffect(()=>{
        renderFavorites()
    }, [])

    const renderFavorites = () => {
        let oldItems = JSON.parse(localStorage.getItem("commandsArray")) || [];
        setFavorites(oldItems)
        console.log(favorites)


    }
    const deleteFavorite = (event) => {
		//get command when favorite clicked
        let oldItems = JSON.parse(localStorage.getItem("commandsArray")) || [];
    };

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
                                <td><button style={{color:"black"}}>remove</button></td>
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
