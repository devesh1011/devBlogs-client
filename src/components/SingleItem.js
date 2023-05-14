import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogContext from '../context/BlogContext';
import DOMPurify from 'dompurify';

const SingleItem = () => {
    const { id } = useParams();

    const { getBlogByID, blog } = useContext(BlogContext);

    // const likeIconRef = useRef(null);

    useEffect(() => {
        getBlogByID(id);
        // eslint-disable-next-line
    }, [getBlogByID, id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    const blogContent = DOMPurify.sanitize(blog.content);

    return (
        <div className="row singleblog ">
            <div className='col-md-9'>
                <article className="card mb-4">
                    <div className="text-center">
                        <div className="card-meta">
                            <Link to="#" >{new Date(blog.createdAt.split('T')).toGMTString().split('GMT')} by {blog.author.username}</Link>
                        </div>
                        <h1 className="card-title">{blog.title}</h1>
                    </div>
                    <div className="img-div text-center">
                        <img className="blogImage" src={blog.blogTitlePic} alt="blog-img" />
                    </div>
                    <div className="card-body singleblog-text" dangerouslySetInnerHTML={{ __html: blogContent }}>
                    </div>
                </article>
            </div>
            <Sidebar />
        </div>

    )
}

export default SingleItem
