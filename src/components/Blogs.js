import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import BlogItem from './BlogItem';
import BlogContext from '../context/BlogContext';
import Pagination from 'react-js-pagination';

const Blogs = () => {
    const context = useContext(BlogContext);
    const { blogs, getAllBlogs } = context;
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        getAllBlogs();
        // eslint-disable-next-line
    }, [getAllBlogs]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <h2 className="text-center myblog-title">All Blogs</h2>
                    <div className="row">
                        {blogs.length === 0 && <div className="loader-container d-flex text-center">
                            <div className="spinner"></div>
                        </div>}
                        {blogs
                            .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
                            .map((blog) => {
                                return (
                                    <div className="col-md-6 col-lg-6" key={blog._id}>
                                        <BlogItem blog={blog} />
                                    </div>
                                );
                            })}
                    </div>
                    <div className="d-flex justify-content-center w-200">
                        {blogs.length > itemsPerPage && (
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={itemsPerPage}
                                totalItemsCount={blogs.length}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        )}
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Blogs;
