import "./Header.css";
import {Link, useNavigate} from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    function handler() {
        navigate("/");
    }

    return (
        <div className="header">
            <h1>Welcome</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/characters"}>Characters</Link>
            <button type="button" onClick={handler}>Home</button>
        </div>
    )
}