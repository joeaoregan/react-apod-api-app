import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <nav className="navBar">
            <ul>
                <Link className="link" to="/">Take Me Home</Link>
            </ul>
        </nav>
    );
}