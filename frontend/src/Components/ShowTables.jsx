import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Button
} from "@material-tailwind/react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowTables(props) {
    const [students, setStudents] = useState([])
    const [studentsDetails, setStudentDetails] = useState([])
    console.log(props)
    useEffect(() => {
        const classID = props._id
            axios.get('http://localhost:8000/api/' + classID + 'students')
            .then((res) => {
                console.log(res)
                setData(...students, res.data.ParticipantStudent)
            })
            students.forEach((student) => {
                axios.get('http://localhost:8000/api/getStudent' + student)
                .then((res) => {
                    console.log(res)
                    setStudentDetails(...studentsDetails, res.data)
                })
            })
    }, [studentsDetails])
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Students Table
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["student", "progress", "start date", "certificate"].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(
                                ({ }, key) => {
                                    const className = `py-3 px-5 ${key === students.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={name}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    <Avatar src={img} alt={name} size="sm" />
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-semibold"
                                                        >
                                                            {name}
                                                        </Typography>
                                                        <Typography className="text-xs font-normal text-blue-gray-500">
                                                            {email}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={className}>
                                                <Progress
                                                    value={60}
                                                    variant="gradient"
                                                    // color={completion === 100 ? "green" : "blue"} 
                                                    className="h-1"
                                                />
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {date}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Button className="flex items-center">
                                                    <AcademicCapIcon
                                                        strokeWidth={2}
                                                        className="h-5 w-5 text-inherit"
                                                    />
                                                    Mint
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}
