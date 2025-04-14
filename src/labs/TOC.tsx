import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function TOC() {
    const { pathname } = useLocation();
    return(
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link to="/Labs" as={Link}>Lab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab1" as={Link} id="wd-a1"
                active={pathname.includes("Lab1")}>Lab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab2" as={Link} id="wd-a2"
                active={pathname.includes("Lab2")}>Lab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab3" as={Link} id="wd-a3"
                active={pathname.includes("Lab3")}>Lab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/raabyo">MyGitHub</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}