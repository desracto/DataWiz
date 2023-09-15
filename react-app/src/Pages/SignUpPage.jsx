import Header1 from "../components/Header1";
import { useState } from "react";
import httpClient from "../httpClient";

function SignUpPage() 
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const signUpUser = async () => {
        try {
            const resp = await httpClient.post("http://localhost:5000/api/users/", {
                username, 
                password,
                email
            });

            console.log(resp)
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header1 />
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
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
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
                <button type="button" onClick={() => signUpUser()}>Submit</button>
            </form>
        </>
    )
}

export default SignUpPage