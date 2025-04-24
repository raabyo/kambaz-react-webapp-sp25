import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import { Button, FormControl } from "react-bootstrap";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signIn = () => {
        const user = db.users.find(
            (u: any) => u.username === credentials.username && u.password == credentials.password);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/kambaz/Dashboard");
    };

    return (
        <div id="wd-signin-screen">
            <h3> Sign in</h3>
            <FormControl defaultValue={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="mb-2" placeholder="username" id="wd-username" />

            <FormControl defaultValue={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="mb-2" placeholder="password" id="wd-password" />

            <Button onClick={signIn} id="wd-signin-btn" className="w-100">
                Sign in
            </Button>


            <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
        </div>
    );
}