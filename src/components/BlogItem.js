import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import BlogContext from '../context/BlogContext';
import DOMPurify from 'dompurify';
import AlertContext from "../context/AlertContext";

const BlogItem = (props) => {
    const { deleteBlog } = useContext(BlogContext);
    const { blog } = props;

    const context = useContext(AlertContext);
    const { showAlert } = context;

    const handleDelete = (e) => {
        e.preventDefault();
        let wantToDelete = window.confirm("Are you sure you want to delete the blog? ")
        if (wantToDelete) {
            deleteBlog(blog._id);
            showAlert("You Blog has been deleted", "success")
        }
    }
    const blogContent = DOMPurify.sanitize(blog.content);

    return (
        <>
            <article className="card mb-4">
                <header className="card-header">
                    <div className="card-meta">
                        <Link to={`/blog/${blog._id}`} >{new Date(blog.createdAt.split('T')).toGMTString().split('GMT')} by {blog.author ? blog.author.username : "Unknown"}</Link>
                    </div>
                    <Link to={`/blog/${blog._id}`}>
                        <h4 className="card-title">{blog.title}</h4>
                    </Link>
                </header>
                <Link to={`/blog/${blog._id}`}>
                    <img className="card-img" src={blog.blogTitlePic ? blog.blogTitlePic : "https://cdn.xxl.thumbs.canstockphoto.com/no-image-available-written-in-chalk-on-a-blackboard-stock-images_csp8317855.jpg"} alt="blog-item-img" />
                </Link>
                <div className="card-body">
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: blogContent.length > 200 ? blogContent.slice(0, 200) + "..." : blogContent }}></p>
                </div>
                {localStorage.getItem('token') && localStorage.getItem('userId') === (blog.author && blog.author._id) && <Link className="btn btn-dark deletebtn" onClick={handleDelete}>Delete Blog</Link>}
            </article>
        </>
    )
}

export default BlogItem
