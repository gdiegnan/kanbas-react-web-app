import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { TfiWrite } from "react-icons/tfi";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import './index.css';

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            {/* {< !--Add buttons and other fields here -->} */}
            <div className="buttons">
                <span className="searchInput">
                    <input placeholder="Search for Assignment" className="button" />
                </span>

                <span className="rightSideButtons">
                    <button className="button">+Group</button>
                    <button className="button" id="assignmentButton">+Assignment</button>
                    <button className="button"><HiMiniEllipsisVertical /></button>
                </span>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <HiMiniEllipsisVertical className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><HiMiniEllipsisVertical className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <HiMiniEllipsisVertical className="me-2" />
                                <TfiWrite id="assignmentIcon" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} id="assignmentTitle">{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><HiMiniEllipsisVertical className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;