
import axios from 'axios';
import { useState } from 'react';
import { parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import Navbar from '../components/navbar';




const localizer = momentLocalizer(moment)


function calendar() {
    
    const events = [{
        id: 1,
        title: 'ป่วย',
        start: new Date(),
        end: new Date(),
    },
    {
        id: 2,
        title: 'next Event',
        start: new Date("2021-12-26"),
        end: new Date("2021-12-26"),
    }]


    const [buttoncolor] = useState("bg-blue-500") ///เอาไวเปลี่ยนค่าในinput



    function handleLogout() {
        localStorage.removeItem("datalocalstorage");
        destroyCookie(null, 'cookieClient')
        // console.log(destroyCookie(null, 'cookieClient'))

        if (localStorage.getItem("datalocalstorage") == null) {
            Router.push('/Login/login')

        }
        else {
            alert("aaa")
        }

    }

    return (
        < >
<Navbar
            
            />
            <div className="bg-green-100">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{
                        height: 600,
                        // color: "blue"
                    }}
                />
                <div className='p-8 justify-center items-center flex'>
                    <button type="button" onClick={() => handleLogout()} className={[buttoncolor, 'text-white font-bold py-2 px-4 rounded'].join(" ")}>Logout</button>
                </div>
            </div>

        </>
    );
}




export default calendar;