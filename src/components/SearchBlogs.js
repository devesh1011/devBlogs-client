import React, { useContext } from 'react';
import BlogItem from './BlogItem';
import BlogContext from '../context/BlogContext';

const SearchsearchResults = () => {

    const { searchResults } = useContext(BlogContext)

    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center myblog-title">Search Results</h2>
                <div className="col-md-12">
                    <div className="row">
                        {searchResults
                            .map((result) => {
                                return (
                                    <div className="col-md-4 col-lg-4" key={result._id}>
                                        <BlogItem blog={result} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchsearchResults

