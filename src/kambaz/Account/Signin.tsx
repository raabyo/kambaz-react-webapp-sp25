import { Link } from "react-router-dom"
export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3> Sign up</h3>
            <input placeholder="username" className="wd-username" /> <br/>
            <input placeholder="password" type="password" className="wd-password" /> <br/>
            <Link to="/Kambaz/Account/Profile" id="wd-signin-btn">Sign up</Link>
            <Link to="/Kambaz/Account/Signup" id="wd-signup-btn">Sign in</Link>
        </div>
    );
}