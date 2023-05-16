import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import BlogItem from './BlogItem'
import BlogContext from '../context/BlogContext';
import AuthContext from '../context/AuthContext';

const Blogs = () => {
    const context = useContext(BlogContext);
    const { userBlog, userBlogs } = context;

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        const userId = localStorage.getItem('userId');
        if (userId) {
            userBlogs(userId);
        }
    }, [userBlogs, navigate]);

    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-9 myblog">
                    <h2 className="text-center myblog-title">Your Blogs</h2>
                    <div className="row">
                        <h4 className='text-center'>{userBlog.length === 0 && <div className="loader-container">
                            <div className="spinner"></div>
                        </div>}</h4>
                        {
                            userBlog.map((blog) => {
                                return (
                                    <div className="col-md-6 col-lg-6">
                                        <BlogItem blog={blog} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

export default Blogs
