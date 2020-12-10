import React, { useState } from "react";
import { Table, Container, Row } from "react-bootstrap";
import styles from "./MasterTable.module.css";
import { Link } from "react-router-dom";

const MasterTable = (props) => {
	const [favorite, setFavorite] = useState(false);

	const ascify = (event) => {
		let baseUrl = "https://artii.herokuapp.com/make?text=";
		let siblingNode =
			event.target.nextSibling.children[0].childNodes[0].nodeValue;
		console.log(siblingNode);
		let apiCall = `${baseUrl}+${siblingNode}`;
		window.open(apiCall, "_blank");
	};

	const isFavorite = (event) => {
		//get command when favorite clicked
		let oldItems = JSON.parse(localStorage.getItem("commandsArray")) || [];
		let command = event.target.parentNode.childNodes[1].innerText;
		let description = event.target.parentNode.childNodes[2].innerText;
		console.log(oldItems)
		let entry = {
			"command": command,
			"description": description,
		};
		const checkExists = obj => obj.command === command;
		if (!(oldItems.some(checkExists))) {
			oldItems.push(entry)
		}
		localStorage.setItem("commandsArray", JSON.stringify(oldItems));
		console.log(localStorage)
  };

	return (
		<Container fluid>
			<Table striped bordered hover variant="dark" size="sm">
				<thead>
					<tr style={{ color: "#008F11" }}>
						<th>ascify</th>
						<th>command</th>
						<th>description</th>
						<th>favorite</th>
					</tr>
				</thead>
				{props.searchText.length > 0 ? (
					<tbody>
						{props.rows?.map((item, index) => (
							<tr key={index}>
								<td style={{ cursor: "pointer" }} onClick={ascify}>
									ascify
								</td>
								<td>
									<Link to={`/manpage/${item?.command}`}>{item?.command}</Link>
								</td>
								<td>{item?.description}</td>
								<td style={{ cursor: "pointer" }} onClick={isFavorite}>favorites</td>
							</tr>
						))}
					</tbody>
				) : null}
			</Table>
		</Container>
	);
};
export default MasterTable;
