import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    async function handleLoginClick(e) {
        e.preventDefault();

        try {
            const res = await axios.get(`http://localhost:8800/username/${username}/${filePath}`);
            console.log("Ok");
        } catch (error) {
            console.log(error);
        }
    }

    function handleUser(e){
        setUsername(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    return <div className="flex flex-col w-full h-screen bg-cyan-700 justify-center items-center font-mono">
       <form id="form" className="flex flex-col gap-4 p-4 w-2/5 bg-neutral-600 rounded-[10px] shadow-lg">
            <div className="flex justify-center items-center text-[40px] text-neutral-300 m-[20px]">
                LOGIN
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
                <input type="text" className="w-7/10 outline-0 bg-neutral-300 p-4" placeholder="Username" onChange = {handleUser}></input> 
                <input type="password" className="w-7/10 utline-0 bg-neutral-300 p-4" onChange={handlePassword}></input> 
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <button className="bg-neutral-300 p-4 w-[100px]" onClick={handleLoginClick}>Login</button>
                <p className="text-red-400 uppercase">{message}</p>
                <Link to="/">Go back</Link>
            </div>
       </form>
    </div>
}