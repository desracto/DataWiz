import React, {useState} from 'react';
import httpClient from "../httpClient";

function LogInPage() 
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const logInUser = async () => {
        console.log(username, password)
        
        try {
            const resp = await httpClient.post("//localhost:5000/api/users/login", {
                username, 
                password
            });

            console.log(resp)
        }
        catch(error) {
            if (error.response.status === 401)
            {
                alert("Invalid creds")
            }
        }
    };

    return (
        <>
            <form>
                <div>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="button" onClick={() => logInUser()}>Submit</button>
            </form>
        </>
    )
}

export default LogInPage