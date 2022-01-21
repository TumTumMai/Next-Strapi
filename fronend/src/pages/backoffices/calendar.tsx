import axios from "axios";
import { useEffect, useState } from "react";
// import { parseCookies, destroyCookie } from "nookies";
// import nookies from 'nookies'
// import Router from "next/router";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import Navbar from "../../components/navbar";
// import { ILeavedata, ILeaveday, Leaveday } from '../../services/Leaveday'
// import { ILeavedata, ILeaveday } from "../../models/leaveday";
import { IHoliday, IHolidayData } from "models/holi.day";

// import events from '../components/'

const localizer = momentLocalizer(moment);

function calendar() {
  const Holiday = async (token: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    // process.env.NEXT_PUBLIC_API_URL
    // `${url}/leave-datails`
    let data: IHolidayData[] = [];

    return axios
      .get<IHoliday>(`${url}/api/holiday-datails`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log(res);
        data = res.data.data.map((d) => {
          return {
            id: d.id,
            title: d.attributes.title,
            start: new Date(d.attributes.holidaystart),
            end: new Date(d.attributes.holidayend),
          };
        });
        // console.log(data)
        return data;
      })

      .catch();
  };

  const [holiday, setHoliday] = useState<IHolidayData[]>();
  useEffect(() => {
    const token = localStorage.getItem("datalocalstorage");
    if (!token) {
      return;
    }
    const toketobj = JSON.parse(token);
    let ld: IHolidayData[] = [];
    Holiday(toketobj.jwt).then((res) => {
      ld = res;
      setHoliday(ld);
      console.log(ld);
    });
    // console.log(ld)

    // console.log(token)
  }, []);
  // let token = localStorage.getItem("datalocalstorage")
  // let leaveday = Leaveday()
  // console.log(token)

  const calendarStyle = () => {
    return {
      style: {
        backgroundColor: "#dcfce7",
      },
    };
  };
  //

  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <div style={{ width: "100%", height: "70px" }}></div> */}
      <div className="bg-green-100 ">
        <Calendar
          localizer={localizer}
          events={holiday}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 600,
          }}
          eventPropGetter={(event, start, end, isSelected) => ({
            event,
            start,
            end,
            isSelected,
            style: { backgroundColor: "#ff3333" },
          })}
          dayPropGetter={calendarStyle}
        />
        {/* <div className='p-8 justify-center items-center flex'>
                    <button type="button" onClick={() => handleLogout()} className={[buttoncolor, 'text-white font-bold py-2 px-4 rounded'].join(" ")}>Logout</button>
                </div> */}
      </div>
    </>
  );
}

export default calendar;
