import React from 'react'
import { Link } from 'react-router-dom'

const Instagram = () => {
    return (
        <div>
            <div className="site-instagram">
                <div className="action">
                    <Link className="btn btn-light" href="#">
                        Follow us @ Instagram
                    </Link>
                </div>
                <div className="row g-0">
                    <div className="col-sm-6">
                        <div className="row g-0">
                            <div className="col-3">
                                <Link className="photo" href="#">
                                    <img className="img-fluid" src="https://milo.bootlab.io/img/instagram/4.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="photo" href="#">
                                    <img className="img-fluid" src="https://milo.bootlab.io/img/instagram/4.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="photo" href="#">
                                    <img className="img-fluid" src="https://milo.bootlab.io/img/instagram/4.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="photo" href="#">
                                    <img className="img-fluid" src="https://milo.bootlab.io/img/instagram/4.jpg" alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row g-0">
                            <div className="col-3">
                                <Link className="photo" href="#">
                                    <img className="img-fluid" src="https://milo.bootlab.io/img/instagram/4.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="photo" href="#">
                                    <img className="img-fluid" src="https://milo.bootlab.io/img/instagram/4.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="photo" href="#">
                                    <img className="img-fluid" src="https://milo.bootlab.io/img/instagram/4.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link className="photo" href="#">
                                    <img className="img-fluid" src="https://milo.bootlab.io/img/instagram/4.jpg" alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram
