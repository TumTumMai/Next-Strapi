import axios from "axios"
///////บอกโครสร้าง ออปเจ็ค ใช้สำหรับ ts ต้องมีILeaveday เสมอ
export interface ILeaveday {
    id: number;
    published_at: Date;
    created_at: Date;
    updated_at: Date;
    Leavedaystart: string;
    Leavedayend: string;
    title: string;
}
export interface ILeavedata {
    id: number;
    title: string;
    start: Date;
    end: Date;
}
export const Leaveday = async (token: string) => {

    let url = "http://localhost:1337/leave-details";
    let data: ILeavedata[] = []

    return axios
        .get<ILeaveday[]>(url, {
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

