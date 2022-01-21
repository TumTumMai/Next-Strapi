import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// import Router from "next/router";
// import { useEffect, useState } from "react";

// import nookies from 'nookies'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // console.log(user)
  // let user = window.localStorage.getItem("datalocalstorage")

  // console.log(user)
  // if (!user) {
  //     Router.push('/login')

  // const cookie = req.cookies
  // console.log(cookie)
  // if (Object.keys(cookie).length === 0) {
  //     // Router.push('/login')
  //     return NextResponse.redirect('/Login/login')

  // }
  const cookie = req.cookies.cookieClient;
  // console.log(cookie)
  if (cookie) {
    return NextResponse.redirect("/");
  }
  //     // Router.push('/login')
  //     return NextResponse.redirect('/Login/login')

  // }

  // }
  // if (typeof window != 'undefined') {
  //     const [user, setUser] = useState(null)
  //     useEffect(() => {
  //         // Perform localStorage action
  //         const value = localStorage.getItem("datalocalstorage")
  //         const user = !!value ? JSON.parse(value) : undefined;
  //         setUser(user)
  //     }, [])

  //     if (!user) {
  //         Router.push('/login')

  //     }
  // }
}
