import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { BsPeople } from "React-icons/bs";
import { ImMeter } from "react-icons/im";
import { FaBook, FaCalendar } from "react-icons/fa";
import { GoBeaker } from "react-icons/go";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function KambazNavigation() {
    const { pathname } = useLocation();
    const links = [
        {
            id:"wd-account-link", 
            to: "/Kambaz/Account", 
            text: "Account", 
            icon: BsPeople
        }, 
        {
            id:"wd-dashboard-link", 
            to: "/Kambaz/Dashboard", 
            text: "Dashboard", 
            icon: ImMeter
        },
        {
            id:"wd-course-link", 
            to: "/Kambaz/Courses", 
            text: "Courses", 
            icon: FaBook
        },
        {
            id:"wd-calendar-link", 
            to: "/Kambaz/Calendar", 
            text: "Calendar", 
            icon: FaCalendar
        },
        {
            id:"wd-inbox-link", 
            to: "/Kambaz/Inbox", 
            text: "Inbox", 
            icon: FaInbox
        },
        {
            id:"wd-labs-link", 
            to: "/Kambaz/Labs", 
            text: "Labs", 
            icon: GoBeaker
        }
    ];

    return (
        <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
            className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <ListGroup.Item id="wd-neu-link" target="_blank" action
                href="https://www.northeastern.edu/"
                className="bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" />
                Northeastern
            </ListGroup.Item>

            {links.map((link) => (
                <ListGroup.Item
                className={`border-0 text-center ${
                    pathname.includes(link.text)
                    ? "bg-white text-danger"
                    : "text-white bg-black"
                }`}
                as={Link}
                to={link.to}
                id={link.id}>
                    {link.icon({ className: "fs-1 text-danger" })}
                    <br />
                    {link.text}
                </ListGroup.Item>
            ))}

        </ListGroup>

    );
}