import React from 'react';

import { Link } from 'react-router-dom'

const Navigation: React.FC = () =>{
    return(
        <>
        <nav>
            <div className="nav-wrapper teal lighten-2">
            <a href="#!" className="brand-logo"> Game Store</a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <Link to="/">
                        <i className="">Home</i>
                    </Link>
                </li>
                <li>
                    <Link to="/games">
                        <i className="">Games</i>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navigation;