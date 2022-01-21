import { createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";
import { setCookie } from "nookies";
import Router from "next/router";
import WEB_PATHS from "constants/webPaths";

export const AuthContext = createContext({
  isAuth: false,
  login: (username: string, password: string) => {},
  logout: () => {},
});

export interface IAuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider(props: IAuthContextProviderProps) {
  const [isAuth, setIsAuth] = useState(false);
  const url = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("datalocalstorage");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const loginHandler = (username: string, password: string) => {
    const loginInfo = {
      identifier: username,
      password: password,
    };
    axios
      .post(`${url}/api/auth/local`, loginInfo)
      .then((res) => {
        console.log(res);
        localStorage.setItem("datalocalstorage", JSON.stringify(res.data));

        setCookie(null, "cookieClient", res.data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        alert("Login Sucsess");
        setIsAuth(true);
        Router.push(WEB_PATHS.CALENDAR);
      })
      .catch(() => {
        alert("Login Failure");
        setIsAuth(false);
      });
  };

  const logoutHandler = () => {
    localStorage.removeItem("datalocalstorage");
    // destroyCookie(null, 'cookieClient')
    setCookie(null, "cookieClient", "", {
      maxAge: 0.1,
      path: "/",
    });
    // console.log(destroyCookie(null, 'cookieClient'))

    if (localStorage.getItem("datalocalstorage") == null) {
      Router.push(WEB_PATHS.LOGIN);
    } else {
      alert("aaa");
    }
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, login: loginHandler, logout: logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
