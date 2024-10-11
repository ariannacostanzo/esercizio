import { NavLink, Outlet } from "react-router-dom";
import './App.scss';
import { useAuth } from "./contexts/AuthProvider";

const DefaultLayout = () => {

const {isLoggedIn} = useAuth();
     return (
       <>
         <header>
           <ul>
             <li>
               <NavLink to="/">Homepage</NavLink>
             </li>
             {isLoggedIn && (
               <li>
                 <NavLink to="/blog">Blog</NavLink>
               </li>
             )}
           </ul>
         </header>
         <main>
           <Outlet />
         </main>
       </>
     );
}
export default DefaultLayout;