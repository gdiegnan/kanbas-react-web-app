import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaDesktop } from "react-icons/fa";
import { TbLetterN } from "react-icons/tb";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";

function KanbasNavigation() {
    const links = [
        { label: " ", icon: <TbLetterN className="fs-2 redIcon"/>},
        { label: "Account", icon: <FaRegUserCircle className="fs-2 greyIcon" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 redIcon" /> },
        { label: "Courses", icon: <FaBook className="fs-2 redIcon" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 redIcon" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2 redIcon" />},
        { label: "History", icon: <FaRegClock className="fs-2 redIcon" />}, 
        { label: "Studio", icon: <FaDesktop className="fs-2 redIcon" />},
        { label: "Commons", icon: <FaArrowRightToBracket className="fs-2 redIcon" />},
        { label: "Help", icon: <RxQuestionMarkCircled className="fs-2 redIcon" />},
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;