import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((a: any) => a.course === cid)

    return (
        <div id="wd-assignments">
            <span>
                <input placeholder="Search for Assignments"
                    id="wd-assignment-search"></input>
                <button id="wd-add-assignment-group">+ Group</button>
                <button id="wd-add-assignment">+ Assignment</button>

            </span>


            <h3 id="wd-assignments-title">Assignments 40% of Total <button>+</button> </h3>

            <ListGroup id="wd-assignment-groups">
                {assignments.map((assignment: any) => (
                    <ListGroup.Item 
                    as={Link}
                    to={`/kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-group"
                    key={assignment._id}
                    >
                        <h4 className="wd-assignment-group-title">{assignment.title}</h4>
                        <p className="wd-assignment-group-description">{assignment.description}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </div>
            );
}