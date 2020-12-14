import React, { useState, useEffect } from 'react';
import { Table, Container, Row } from "react-bootstrap";
import { getAllFavorites } from '../api/API';

const FavoriteTable = (props) => {
    //This is command and description in props obj
    //localStorage
    //const [favorites, setFavorites] = useState([]) 
    const [favorites, setFavorites] = useState([]);
    useEffect(()=>{
        const data = async () => await getAllFavorites();
        let results = data().then(resp => {
            setFavorites(resp);
        })

        //localStorage
        //renderFavorites()
    }, [])

	const deleteFavorite = async (event) => {
		event.preventDefault();
		let command = event.target.parentElement.parentElement.children[0].innerText;
        let description = event.target.parentElement.parentElement.children[1].innerText;
        let id = (favorites.find(element => element.command === command)).id;
		const rawResponse = await fetch(`http://localhost:8000/api/favorites_delete/${id}/`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}});
		const content = await rawResponse.json();
		console.log(rawResponse);
        window.alert(rawResponse.status === 200 ? 'Favorite deleted.' : 'Unable to delete'); 
        if (rawResponse.status === 200) {
            setFavorites(favorites.filter(e => e.id !== id));
            // let index = favorites.findIndex(e => e.id === id);
            // favorites.splice(index, 1);
        }
	}
    //localStorage
    // const deleteFavorite = (event) => {
    //     event.preventDefault()
    //     let oldItems = JSON.parse(localStorage.getItem("commandsArray")) || [];
    //     let command = event.target.id//.childNodes[2].innerText;
    //     const checkExists = obj => obj.command === command;
    //     const result = oldItems.filter(item=>item.command !== command)
    //     setFavorites(result)
    //     localStorage.setItem("commandsArray", JSON.stringify(result))
    //     console.log(localStorage)
	// 	    // if (oldItems.some(checkExists)) {
    //         //     console.log(oldItems[item])
	// 	    // }
    // }

    //localStorage
    // const renderFavorites = () => {
    //     let oldItems = JSON.parse(localStorage.getItem("commandsArray")) || [];
    //     setFavorites(oldItems)
    //     console.log(favorites)
    // }

    return (
        <div style={{marginTop:"80px"}}>
            <Table striped bordered hover variant="dark" size="sm">
				<thead>
					<tr style={{ color: "#008F11" }}>
						<th>command</th>
						<th>description</th>
						<th>comments</th>
						<th>delete</th>
						<th>edit</th>
					</tr>
				</thead>
					<tbody>
                        {favorites.map((item, index)=>{
                            return ( 
                            <tr>
                                <td>{item.command}</td>
                                <td>{item.description}</td>
                                <td>{item.comment}</td>
                                <td><button id={item.command} style={{color:"black"}} onClick={deleteFavorite}>remove</button></td>
                                <td><button style={{color:"black"}}>edit</button></td>
                            </tr>)
                        })}
                    </tbody>
			</Table>
        </div>
    )
}

export default FavoriteTable
