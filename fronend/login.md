// import axios from 'axios';

// const Loginpage = () => {
//     return (

//         <div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                 />
//             </div>
//             <div>
//                 <input
//                     type="password"
//                     placeholder="Password"
//                 />
//             </div>

//             <button>เข้าสู่ระบบ</button>

//         </div>
//     )

// }
// export default Loginpage

// login() {
//     let url = "http://localhost:1336/auth/local";
//     let body = {
//         identifier: this.form.identifier,
//         password: this.form.password,
//     };

//     this.$axios
//         .post(url, body)
//         .then((res) => {
//             localStorage.setItem("dataall", JSON.stringify(res.data));
//             this.timeoutToken(res.data.jwt);
//             alert("Login Sucsess");
//             this.$router.push("/");
//         })
//         .catch((error) => alert("Login Failure"));
// },
///
// import axios from "axios";
import { useState, useContext } from "react";
// import { setCookie } from "nookies";
// import Router from "next/router";
import { AuthContext } from "stores/authContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttoncolor] = useState("bg-blue-500");
  const authContext = useContext(AuthContext);

  // const url = process.env.NEXT_PUBLIC_API_URL;

  // console.log(url)

  function handleLogin() {
    authContext.login(username, password);
    // const loginInfo = {
    //   identifier: username,
    //   password: password,
    // };
    // const reslogin = await fetch(`http://localhost:1337/auth/local`, {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(loginInfo)
    // })
    // const login = await reslogin.json();
    // console.log(login)
    // localStorage.setItem("dataall", JSON.stringify(login.data));
    // setCookie(null, 'jwt', login.jwt, {
    //     maxAge: 30 * 24 * 60 * 60,
    //     path: '/',
    // })
    // if (reslogin.status === 200) {
    //     // localStorage.setItem("dataall", JSON.stringify(login.data));
    //     // setCookie(null, 'jwt', login.jwt, {
    //     //     maxAge: 30 * 24 * 60 * 60,
    //     //     path: '/',
    //     // })
    //     alert("Login Sucsess");
    //     Router.push('/')
    // }
    // else {
    //     alert("Login fail");
    // }
    // axios
    //   .post(`${url}/api/auth/local`, loginInfo)
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("datalocalstorage", JSON.stringify(res.data));
    //     setCookie(null, "cookieClient", res.data.jwt, {
    //       maxAge: 30 * 24 * 60 * 60,
    //       path: "/",
    //     });
    //     alert("Login Sucsess");
    //     Router.push("/backoffices/calendar");
    //   })
    //   .catch(() => alert("Login Failure"));
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
