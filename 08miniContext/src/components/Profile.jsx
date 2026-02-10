import React from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
function Login() {
    const {user} = useContext(UserContext)
    
    if (!user) return <h2>Please Login</h2>

    return (
        <div>Welcome {user.username}</div>
    )
            
}

export default Login;