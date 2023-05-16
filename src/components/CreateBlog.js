import React, { useState, useContext, useEffect } from 'react';
import BlogContext from '../context/BlogContext';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AlertContext from "../context/AlertContext";
import AuthContext from "../context/AuthContext";

const CreateBlog = () => {
    const { createBlog } = useContext(BlogContext);

    const [blogDetails, setBlogDetails] = useState({
        title: "",
        content: "",
        category: "",
        blogImage: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if ( (token) === false) {
            navigate('/login');
        }
    }, [navigate,  ]);

    const { showAlert } = useContext(AlertContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        createBlog(blogDetails.title, blogDetails.content, blogDetails.category, blogDetails.blogImage);
        setBlogDetails({
            title: "",
            content: "",
            category: "",
            blogImage: ""
        });

        navigate('/')

        showAlert("Your new blog has been created", "success")
    };

    return (
        <div className="container form form-blog">
            <h2 className='text-center form-title'>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={blogDetails.title}
                        onChange={(e) => {
                            setBlogDetails({
                                ...blogDetails, title: e.target.value
                            })
                        }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <ReactQuill
                        id="content"
                        value={blogDetails.content}
                        onChange={(value) => {
                            setBlogDetails({
                                ...blogDetails, content: value
                            })
                        }}
                        theme="snow"
                        modules={{
                            toolbar: [
                                [{ header: [1, 2, false] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                ['link', 'image'],
                                ['clean'],
                            ],
                        }}
                        formats={[
                            'header',
                            'bold', 'italic', 'underline', 'strike', 'blockquote',
                            'list', 'bullet',
                            'link', 'image',
                        ]}
                        placeholder="Write your blog content here..."
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="blogImage">Blog Image</label>
                    <input
                        type="text"
                        className="form-control"
                        id="blogImage"
                        value={blogDetails.blogImage}
                        placeholder='Add the Image URL Here'
                        onChange={(e) => {
                            setBlogDetails({
                                ...blogDetails, blogImage: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="form-group input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" value={blogDetails.category}
                        onChange={(e) => {
                            setBlogDetails({
                                ...blogDetails, category: e.target.value
                            })
                        }}>
                        <option selected>Select Blog Category</option>
                        <option value="science">Science</option>
                        <option value="business">Business</option>
                        <option value="travel">Travel</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="hobby">Hobbies</option>
                        <option value="work">Work</option>
                        <option value="education">Career and education</option>
                        <option value="fitness">Fitness and exercise</option>
                        <option value="development">Personal development</option>
                        <option value="fashion">Fashion and beauty</option>
                        <option value="culture">Arts and culture</option>
                        <option value="programming">Programming</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary my-2">
                    Create Blog
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
