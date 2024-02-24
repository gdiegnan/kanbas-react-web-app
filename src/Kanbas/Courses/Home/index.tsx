import ModuleList from "../Modules/List";
import './index.css';
import { FaFileImport, FaArrowRightFromBracket, FaLocationCrosshairs } from "react-icons/fa6";
import { MdBarChart } from "react-icons/md";
import { LuMegaphone } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { PiNumberCircleFiveFill } from "react-icons/pi";

function Home() {
    return (
        <div className="d-flex">
            <span className="flex-fill modules">
                <ModuleList />
            </span>
            <div className="flex-grow-0 me-2 d-none d-lg-block buttons">
                <h4>Course Status</h4>
                <button id="test" className="course-status-button"><FaFileImport />  Import
                    Existing Content</button><br />
                <button className="course-status-button"><FaArrowRightFromBracket /> Import From
                    Commons</button><br />
                <button className="course-status-button"><FaLocationCrosshairs /> Choose Home
                    Page</button><br />
                <button className="course-status-button"><MdBarChart /> View Course
                    Stream</button><br />
                <button className="course-status-button"><LuMegaphone /> New
                    Announcement</button><br />
                <button className="course-status-button"><MdBarChart /> New
                    Analytics</button><br />
                <button className="course-status-button"><FaRegBell /> View Course
                    Notifications</button>

                <div className="home-right-item">
                    <h4 id="todo">To Do</h4>
                    <hr />
                    <span className="to-do-item"><PiNumberCircleFiveFill className="numberIcon"/>Grade A1 - ENV
                        + HTML</span>
                </div>
                <div className="home-right-item">
                    <h4>Coming Up</h4>
                    <hr />
                    <ul className="side-list">
                        <li><i className="fa-regular fa-calendar"></i><span className="to-do-item">Lecture</span></li>
                        <li><i className="fa-regular fa-calendar"></i><span className="to-do-item">CS5610 06 S23 Lecture</span></li>
                        <li><i className="fa-regular fa-calendar"></i><span className="to-do-item">Lecture</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;