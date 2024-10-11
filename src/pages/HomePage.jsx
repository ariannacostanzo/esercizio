import { Link } from "react-router-dom";

const HomePage = () => {
     return (
     <>
       <h1>Homepage</h1>
       <Link to="/login">Vai al login</Link>
     </>
     )
}
export default HomePage;