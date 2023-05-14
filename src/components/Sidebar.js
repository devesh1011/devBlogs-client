import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import BlogContext from '../context/BlogContext';

const Sidebar = () => {

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const { searchBlogs } = useContext(BlogContext)

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            searchBlogs(searchQuery)

            navigate(`/searchedBlogs`)
        } catch (error) {
            console.error('Error fetching search results:', error.message);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="col-md-3 ms-auto">
            <aside className="sidebar">
                <div className="input-group">
                    <div className="form-outline d-flex justify-content-center align-items-center">
                        <input id="search-focus" type="search" className="form-control" onChange={handleSearchChange} />
                        <Link onClick={handleSearch}><i className="fas fa-search fa-lg mx-2"></i></Link>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">About</h4>
                        <p className="card-text">Welcome to DevBlogs! We're thrilled to have you here. DevBlogs is a vibrant community of curious minds and passionate souls, brought together by a shared love for exploration, discovery, and self-expression. </p>
                    </div>
                </div>
            </aside>

            <aside className="sidebar sidebar-sticky">
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Blog Categories</h4>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/science">Science</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/business">Business</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/travel">Travel</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/lifestyle">Lifestyle</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/hobby">Hobby</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/work">Work</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/education">Education</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/fitness">Fitness</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/development">Development</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/programming">Programming</Link>
                        <Link className="btn btn-light btn-sm mb-1" to="/category/culture">Culture</Link>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Popular stories</h4>

                        <a href="post-image.html" className="d-inline-block">
                            <h4 className="h6">The blind man</h4>
                            <img className="card-img" src="https://milo.bootlab.io/img/articles/2.jpg" alt="" />
                        </a>
                        <time className="timeago" dateTime="2021-09-03 20:00" timeago-id="7">1 year ago</time> in Lifestyle

                        <a href="post-image.html" className="d-inline-block mt-3">
                            <h4 className="h6">Crying on the news</h4>
                            <img className="card-img" src="https://milo.bootlab.io/img/articles/2.jpg" alt="" />
                        </a>
                        <time className="timeago" dateTime="2021-07-16 20:00" timeago-id="8">1 year ago</time> in Work

                    </div>
                </div>
            </aside>

        </div>
    )
}

export default Sidebar
