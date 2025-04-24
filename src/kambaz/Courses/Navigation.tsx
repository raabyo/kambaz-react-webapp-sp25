import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";


export default function CourseNavigation() {

    const { cid } = useParams();
    const { pathname } = useLocation();
    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Zoom",
        "Assignments",
        "Quizzes",
        "Grades",
        "People"
    ];
    return (

        <ListGroup id="wd-courses-navigation" className="wd rounded-0">
            {links.map((link) => (
                <ListGroup.Item
                    active={pathname.includes(link)}
                    className="border-0 text-danger bg-white"
                    as={Link}
                    to={`/kambaz/Courses/${cid}/${link}`}>
                    {link}
                </ListGroup.Item>
            ))}
        </ListGroup>

    );
}