import React from "react";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;

    return(
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    {users
                    .filter((usr: any) => enrollments.some((enrollment: any) => enrollment.user === usr._id && enrollment.course === cid))
                    .map((user: any) => (
                        <tr key={users._id}><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">{users.firstname}</span>{""}
                        <span className="wd-last-name">{users.lastname}</span>
                        </td>
                        
                        <td className="wd-login-id">{users.loginId}</td>
                        <td className="wd-section">{users.section}</td>
                        <td className="wd-role">{users.role}</td>
                        <td className="wd-last-activity">{users.lastActivity}</td>
                        <td className="wd-total-activity">{users.totalActivity}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </div>
    )
}
