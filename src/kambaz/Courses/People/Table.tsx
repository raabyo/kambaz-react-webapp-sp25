import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return(
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Tony</span>{""}
                        <span className="wd-last-name">Start</span>
                        </td>
                        
                        <td className="wd-login-id">0012345615</td>
                        <td className="wd-section">5101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                        </tr>

                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Jess</span>{""}
                        <span className="wd-last-name">Green</span>
                        </td>
                        
                        <td className="wd-login-id">0012345617</td>
                        <td className="wd-section">5101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                        </tr>

                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Bruce</span>{""}
                        <span className="wd-last-name">Wayne</span>
                        </td>
                        
                        <td className="wd-login-id">0012345618</td>
                        <td className="wd-section">5101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                        </tr>

                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Natasha</span>{""}
                        <span className="wd-last-name">Rogers</span>
                        </td>
                        
                        <td className="wd-login-id">0012345619</td>
                        <td className="wd-section">5101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                        </tr>
                </tbody>
            </Table>
        </div>
    )
}
