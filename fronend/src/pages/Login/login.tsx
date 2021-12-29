
import axios from 'axios';
import { useState } from 'react';
import { parseCookies, setCookie } from 'nookies'
import Router from 'next/router'
import Navbar from '../components/navbar';


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [buttoncolor] = useState("bg-blue-500") ///เอาไวเปลี่ยนค่าในinput
    let url = "http://localhost:1337/auth/local";


    function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        }


        axios
            .post(url, loginInfo)
            .then((res) => {
                console.log(res)
                localStorage.setItem("datalocalstorage", JSON.stringify(res.data));

                setCookie(null, 'cookieClient', res.data.jwt, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                })

                alert("Login Sucsess");
                Router.push('/Calen/calendar')

            })
            .catch(() => alert("Login Failure"));

    }

    return (
        <>
            <Navbar></Navbar>
            <div className='p-8 justify-center items-center h-screen flex bg-blue-400 '>

                <form>
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username} />
                    <br />
                    <br />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                    <br />
                    <br />
                    <button type="button" onClick={() => handleLogin()} className={[buttoncolor, 'text-white font-bold py-2 px-4 rounded'].join(" ")}>Login</button>
                </form>
            </div>
        </>
    );
}




export default Login;