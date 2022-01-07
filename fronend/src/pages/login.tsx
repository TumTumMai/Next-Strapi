
import axios from "axios";
import { useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttoncolor] = useState("bg-blue-500");
  const url = process.env.NEXT_PUBLIC_API_URL;

  // console.log(url)

  function handleLogin() {
    const loginInfo = {
      identifier: username,
      password: password,
    };

    

    axios
      .post(`${url}/auth/local`, loginInfo)
      .then((res) => {
        console.log(res);
        localStorage.setItem("datalocalstorage", JSON.stringify(res.data));

        setCookie(null, "cookieClient", res.data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        alert("Login Sucsess");
        Router.push("/backoffices/calendar");
      })
      .catch(() => alert("Login Failure"));
  }

  return (
    <>
      <div className="p-8 justify-center items-center h-screen flex bg-blue-400 ">
        <form>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <br />
          <button
            type="button"
            onClick={() => handleLogin()}
            className={[
              buttoncolor,
              "text-white font-bold py-2 px-4 rounded",
            ].join(" ")}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;