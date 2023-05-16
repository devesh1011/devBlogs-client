import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogContext from '../context/BlogContext';
import DOMPurify from 'dompurify';

const SingleItem = () => {
    const { id } = useParams();

    const { getBlogByID, blogByID } = useContext(BlogContext);

    useEffect(() => {
        getBlogByID(id);
        // eslint-disable-next-line
    }, [getBlogByID, id]);

    if (!blogByID) {
        return <div className="loader-container d-flex text-center">
            <div className="spinner"></div>
        </div>;
    }

    const blogContent = DOMPurify.sanitize(blogByID.content);

    return (
        <div className="row singleblog ">
            <div className='col-md-9'>
                <article className="card mb-4">
                    <div className="text-center">
                        <div className="card-meta">
                            <Link to="#" >{new Date(blogByID.createdAt.split('T')).toGMTString().split('GMT')} by {blogByID.author.username}</Link>
                        </div>
                        <h1 className="card-title">{blogByID.title}</h1>
                    </div>
                    <div className="img-div text-center">
                        <img className="blogImage" src={blogByID.blogTitlePic} alt="blog-img" />
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
