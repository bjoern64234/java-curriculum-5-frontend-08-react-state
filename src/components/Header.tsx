import "./Header.css";
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <div className="header">
            <h1>Welcome</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/characters"}>Characters</Link>
        </div>
    )
}