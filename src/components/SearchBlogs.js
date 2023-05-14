import React, { useContext, useState } from 'react';
import BlogItem from './BlogItem';
import BlogContext from '../context/BlogContext';
import Pagination from 'react-js-pagination';

const SearchsearchResults = () => {

    const { searchResults } = useContext(BlogContext)

    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 8;

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center myblog-title">All searchResults</h2>
                    <div className="row">
                        {searchResults.length === 0 && 'Oops! No searchResults with this keyword'}
                        {searchResults
                            .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
                            .map((result) => {
                                return (
                                    <div className="col-md-4 col-lg-4" key={result._id}>
                                        <BlogItem blog={result} />
                                    </div>
                                );
                            })}
                    </div>
                    <div className="d-flex justify-content-center w-200">
                        {searchResults.length > itemsPerPage && (
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={itemsPerPage}
                                totalItemsCount={searchResults.length}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchsearchResults

