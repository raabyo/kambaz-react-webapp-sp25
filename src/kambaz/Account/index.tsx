import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";

export default function Account() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td valign="top">
                        <AccountNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to={ currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"} />} />
                            <Route path="/Signin" element={<Signin />} />
                            <Route path="/Profile" element={<Profile />} />
                            <Route path="/Signup" element={<Signup />} />
                        </Routes>
                    </td>
                </tr>
                </tbody>
            </table>


        </div>
    );
}