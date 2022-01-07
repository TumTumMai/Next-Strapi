import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
// import Router from 'next/router'
// import { useEffect, useState } from "react";

// import nookies from 'nookies'


export function middleware(req: NextRequest, ev: NextFetchEvent) {

    const cookie = req.cookies.cookieClient
    // console.log(cookie)
    if (cookie === undefined) {
        return NextResponse.redirect('/login')

    }

} 