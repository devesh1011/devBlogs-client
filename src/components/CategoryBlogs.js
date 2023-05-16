import React, { useContext, useEffect, useState } from 'react';
import BlogContext from '../context/BlogContext';
import BlogItem from './BlogItem';
import { useParams } from 'react-router-dom';

const CategoryBlogs = () => {
    const { blogs } = useContext(BlogContext);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const { category } = useParams();

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    useEffect(() => {
        const categoryBlogs = blogs.filter(blog => blog.blogCategory === category);
        setFilteredBlogs(categoryBlogs);
    }, [blogs, category]);

    return (
        <div className="container">
            <h2 className="text-center myblog-title">{capitalize(category)} Blogs</h2>
            <div className="col-md-12">
                <div className="row">
                    {filteredBlogs.length === 0 && `Oops! Blogs related to ${category} are not available now`}
                    {filteredBlogs.map((blog) => {
                        return (
                            <div className="col-md-4 col-lg-4" key={blog._id}>
                                <BlogItem blog={blog} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CategoryBlogs;
