import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "../axios";
import { Navigate } from "react-router-dom";

const Login = () => {
    const { setUser, csrfToken } = useAuth()
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)

    const handleSetCredentials = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        csrfToken()
        
        try {
            const resp = await axios.post('/login', credentials)
            console.log(resp.data.user);
            if (resp.status === 200) {
                setUser(resp.data.user)
                return <Navigate to={ '/home' }/>
            }
        } catch (error) {
            console.log(error);
			if (error.response.status === 401) {
				setError(error.response.data.message);
			}
        }
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Login</h1>
                <label htmlFor="">Email: </label>
                <input
                    type="text"
                    name="email"
                    value={ credentials.email }
                    onChange={ handleSetCredentials }
                />

                <label htmlFor="">Password: </label>
                <input
                    type="password"
                    name="password"
                    value={ credentials.password }
                    onChange={ handleSetCredentials }
                />

                <button>Login</button>
            </form>

            { error && <p>{ error }</p> }
        </div>
    );
}
 
export default Login;