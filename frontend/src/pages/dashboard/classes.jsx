import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import store from "../../Store";
import axios from "axios";
import ClassCard from '@/Components/ClassCard'
import ShowTables from "@/Components/ShowTables";

export function Classes() {
    // const url = 'http://localhost:8000'
    let [data, setData] = useState([]);
    let [classroom, setClassroom] = useState({});
    useEffect(() => {
        const wallet = store.getState().wallet;
        // const wallet = '0x96c05D6f34b8C4AE9C26adcD5Da2566617700A60'
        axios.get('http://localhost:8000/api/student/getStudent/' + wallet)
            .then(async (res) => {
                console.log(res.data.Classrooms)
                if (res) {
                    setData(...data, res.data.Classrooms)
                }
                console.log(data)
                axios.get(`http://localhost:8000/api/classroom/${data}`)
                    .then(async (resp) => {
                        setClassroom(
                            classroom => ({
                                ...classroom,
                                ...resp.data
                            })
                        )
                        console.log(classroom)
                    })
            }
            )
    }, [data])

    return (
        <>
            <ClassCard {...classroom} />
        </>
    );
}