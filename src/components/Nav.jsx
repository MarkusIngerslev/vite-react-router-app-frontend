import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Startside</NavLink>
            <NavLink to="/users">BrugerData</NavLink>
            <NavLink to="/newuser">Brugertilføjelse</NavLink>
        </nav>
    );
}
