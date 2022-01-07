
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { parseCookies, destroyCookie } from 'nookies'
// import nookies from 'nookies'
// import Router from 'next/router'
// import FullCalendar from '@fullcalendar/react'
// import interactionPlugin from '@fullcalendar/interaction'
// import timeGridPlugin from '@fullcalendar/timegrid'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import Navbar from '../../components/navbar';
// import { ILeavedata, Leaveday } from '../../services/Leaveday'
// import events from '../components/events'

// import events from '../components/'


const localizer = momentLocalizer(moment)


function calendar() {

    // const [buttoncolor] = useState("bg-blue-500") ///เอาไวเปลี่ยนค่าในinput
     interface ILeaveday {
        id: number;
        published_at: Date;
        created_at: Date;
        updated_at: Date;
        Leavedaystart: string;
        Leavedayend: string;
        title: string;
    }
     interface ILeavedata {
        id: number;
        title: string;
        start: Date;
        end: Date;
    }
     const Leaveday = async (token: string) => {
    
        const url = process.env.NEXT_PUBLIC_API_URL;
        let data: ILeavedata[] = []
    
        return axios
            .get<ILeaveday[]>(`${url}/leave-details`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                // console.log(res)
                data = res.data.map(d => {
                    return {
                        id: d.id,
                        title: d.title,
                        start: new Date(d.Leavedaystart),
                        end: new Date(d.Leavedayend)
                    }
                })
                // console.log(data)
                return data
    
            })
    
            .catch();
    
    
    }
    


    const [leaveday, setLeaveday] = useState<ILeavedata[]>()
    useEffect(() => {
        const token = localStorage.getItem("datalocalstorage")
        if (!token) {
            return
        }
        const toketobj = JSON.parse(token)
        let ld: ILeavedata[] = []
        Leaveday(toketobj.jwt).then((res) => {
            ld = res
            setLeaveday(ld)
            console.log(ld)

        })
        // console.log(ld)

        // console.log(token)
    }, [])
    // let token = localStorage.getItem("datalocalstorage")
    // let leaveday = Leaveday()
    // console.log(token)

    return (
        < >
            <Navbar></Navbar>
            <div style={{ width: '100%', height: '70px' }}></div>
            <div className="bg-green-100 ">
                <Calendar
                    localizer={localizer}
                    events={leaveday as any}
                    startAccessor="start"
                    endAccessor="end"
                    style={{
                        height: 600,
                        // color: "blue"
                    }}
                />

            </div>

        </>
    );
}




export default calendar;