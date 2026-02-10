import React, {useState,useContext} from 'react';
import UserContext from '../context/UserContext';
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)   // we are using the setUser function from the context to set the user data globally so that it can be accessed by other components as well

    const handleSubmit = (e) => {
        console.log("Logged In");
        e.preventDefault();
        setUser({username,password})   // we are setting the user data in the context so that it can be accessed by other components as well
    }
        
    return ( 
        <>
        <h2>Login</h2>

        <input type="text" 
        value = {username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />

        <br />

        <input type="text"
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />

        <br />
        
        <button onClick={handleSubmit}>Submit</button>
        </>
     );
}

export default Login;