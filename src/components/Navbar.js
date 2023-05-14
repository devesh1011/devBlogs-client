import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { setAuth, checkTokenValidity } = useContext(AuthContext);

    const token = localStorage.getItem("token");
    useEffect(() => {
        const checkToken = async () => {
            if (token && await checkTokenValidity(token)) {
                setAuth(true);
            } else {
                setAuth(false);
            }
        }
    }, [setAuth, checkTokenValidity, token])

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top sticky">
                <div className="container">
                    <button className="navbar-toggler order-2 order-md-1" type="button" data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse" aria-controls="navbar-left navbar-right" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="navbar-brand" to="/"><strong>DevBlogs</strong></Link>

                    <div className="collapse navbar-collapse order-3 order-md-2" id="navbar-left">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {localStorage.getItem('token') && <ul className='navbar-nav ms-auto'>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/myblogs">Your Blogs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/createblog">Write a Blog</Link>
                                </li>
                            </ul>}

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {!localStorage.getItem('token') && <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                </li>
                            </ul>}

                            {localStorage.getItem('token') && <ul className='navbar-nav ms-autp'>
                                <li className="nav-item">
                                    <ProfileDropdown />
                                </li></ul>}
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar
