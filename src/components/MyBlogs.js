import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import BlogItem from './BlogItem'
import BlogContext from '../context/BlogContext';
import AuthContext from '../context/AuthContext';

const Blogs = () => {
    const context = useContext(BlogContext);
    const { blogs, userBlogs } = context;
    const { isAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }

        const userId = localStorage.getItem('userId');
        if (userId) {
            userBlogs(userId);
        }
    }, [userBlogs, isAuthenticated, navigate]);

    if (!blogs) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-9 myblog">
                    <h2 className="text-center myblog-title">Your Blogs</h2>
                    <div className="row">
                        <h4 className='text-center'>{blogs.length === 0 && "Create your first blog"}</h4>
                        {
                            blogs.map((blog) => {
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
