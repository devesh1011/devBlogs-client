import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">

                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Privacy policy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Terms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Feedback</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Advertise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="page-contact.html">Contact</Link>
                        </li>
                    </ul>
                    <div className="copy">
                        © DevBlogs 2023<br />
                            All rights reserved
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
