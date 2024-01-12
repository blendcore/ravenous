import { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

const SearchBar = () => {
    const [search, setSearch] = useState();
    const [location, setLocation] = useState();
    const [sortByOption, setSortByOption] = useState("best_match");

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <div>
                <input className="btn-check" type="radio" name="sortingOptions" id={sortByOption} value={sortByOptionValue} />
                <label className="btn btn-outline-light" for={sortByOption}>{sortByOption}</label>
            </div>;
        });
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSearch = (e) => {
        console.log(`Searching Yelp with ${search}, ${location}, ${sortByOption}`);
        e.preventDefault();
    }

    return (
        <form className="search-bar" role="search" onSubmit={handleSearch}>
            <div className='container'>
                <div className="d-flex mb-3">{renderSortByOptions()}</div>
                <div className="d-sm-flex mb-3">
                    <input className="form-control form-control-lg me-sm-3 mb-3" type="search" placeholder="Search Businesses" aria-label="Search Businesses" value={search} onChange={handleSearchChange} />
                    <input className="form-control form-control-lg ms-sm-3 mb-3" type="search" placeholder="Where?" aria-label="Where?" value={location} onChange={handleLocationChange} />
                </div>
                <button className="btn btn-warning btn-lg mx-auto d-block" type="submit">Let's go</button>
            </div>
        </form>
    )
}

export default SearchBar;