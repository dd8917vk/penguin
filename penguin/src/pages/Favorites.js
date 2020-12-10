import Navbar from '../components/Navbar'
import { Table, Container, Row } from "react-bootstrap";
import FavoriteTable from '../components/FavoriteTable'

const Favorites = () => {
    return (
        <div>
            <Navbar/>
            <FavoriteTable/>
            
        </div>
    )
}

export default Favorites
