import { useAuth } from "../contexts/AuthProvider";

const Login = () => {

    const { login, isLoggedIn, logout } = useAuth();


     return (
       <>
         <h1>Login Page</h1>
         {!isLoggedIn ? (
           <button onClick={login}>Login</button>
         ) : (
           <button onClick={logout}>Logout</button>
         )}
       </>
     );
}
export default Login;