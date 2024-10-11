import { NavLink, Outlet } from "react-router-dom";
import './App.scss';
const DefaultLayout = () => {
     return (
     <>
       <header>
        <ul>
            <li>
                <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
        </ul>
       </header>
       <main>
        <Outlet/>
       </main>
     </>
     )
}
export default DefaultLayout;