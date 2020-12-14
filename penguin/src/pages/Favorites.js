import Navbar from '../components/Navbar'
import { Table, Container, Row } from "react-bootstrap";
import FavoriteTable from '../components/FavoriteTable'

const Favorites = (props) => {
    let obj = props.location.state;
    return (
        <div>
            <FavoriteTable props_obj={obj} />
        </div>
    )
}

export default Favorites
