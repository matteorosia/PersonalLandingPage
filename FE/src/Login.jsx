import { Link } from "react-router-dom";

export default function Login(){

    function handleLoginClick(e){
        console.log(e.target.value);
    }

    return <div className="flex flex-col w-full h-screen bg-neutral-700 justify-center items-center">
       <form id="form" className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex justify-center items-center text-2xl text-neutral-300">
                LOGIN
            </div>
            <input type="text" className="outline-0 bg-neutral-300 p-4" placeholder="Username"></input> 
            <input type="password" className="utline-0 bg-neutral-300 p-4"></input> 
            <div className="flex flex-col gap-4 justify-center items-center">
                <button className="bg-neutral-300 p-4 w-[100px]" onClick={handleLoginClick}>Login</button>
                <Link to="/">Go back</Link>
            </div>
       </form>
    </div>
}