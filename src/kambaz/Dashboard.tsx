import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as db from "./Database";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse, 
    deleteCourse, updateCourse} : {
        courses: any[]; course: any, setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }
) {
   
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    return (
        <div id="wd-dashboard" className="p-4">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            <h5>New Course 
            <button className="btn btn-primary float-end"
                id="wd-update-course-click"
                onClick={updateCourse}>Update</button>
                <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse}>Add</button>
                </h5> <br />
            <FormControl value={course.name} className="mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <FormControl value={course.description} 
                onChange={(e) => setCourse({ ...course, description: e.target.value })} /> <hr/>

            <h2 id="wd-dashboard-published"> Published Courses ({courses.length})</h2> <hr />

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                    .filter((course) =>
                    enrollments.some(
                        (enrollment) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    )
                    ).map((course) => (
                        <div key={course._id} className="col" style={{ width: "300px" }}>
                            <div className="card">
                                <img src={course.image}/> <hr/>
                                <h3>{course.name}</h3> 

                                {course.description} 
                                <span>
                                <button className="btn btn-primary">
                                    Go
                                </button>

                                <button id="wd-edit-course-click"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }} className="btn btn-warning me-2 float-end">
                                    Edit</button>

                                <button onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }} className="btn btn-danger float-end"
                                    id="wd-delete-course-click">
                                    Delete
                                </button>
                                </span>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </div>
    );
}