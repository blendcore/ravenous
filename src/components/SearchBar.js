import { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [search, setSearch] = useState();
    const [location, setLocation] = useState();
    const [sortOption, setSortOption] = useState("Best Match")

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSortOption = e => {
        setSortOption(e.target.value)
    }

    const handleSearch = (e) => {
        console.log(`Searching Yelp with ${search}, ${location}, ${sortOption}`);
        e.preventDefault();
    }

    return (
        <form className="search-bar" role="search" onSubmit={handleSearch}>
            <div className='container'>
                <div class="btn-group btn-group-lg mb-3" role="group" aria-label="Basic radio toggle button group">
                    <input
                        className='btn-check'
                        type="radio"
                        name="sort-option"
                        value="Best Match"
                        id="best-match"
                        checked={sortOption === "Best Match"}
                        onChange={handleSortOption}
                    />
                    <label className='btn btn-outline-light' htmlFor="best-match">Best Match</label>
                    <input
                        className='btn-check'
                        type="radio"
                        name="sort-option"
                        value="Highest Rated"
                        id="highest-rated"
                        checked={sortOption === "Highest Rated"}
                        onChange={handleSortOption}
                    />
                    <label className='btn btn-outline-light' htmlFor="highest-rated">Highest Rated</label>
                    <input
                        className='btn-check'
                        type="radio"
                        name="sort-option"
                        value="Most Reviewed"
                        id="most-reviewed"
                        checked={sortOption === "Most Reviewed"}
                        onChange={handleSortOption}
                    />
                    <label className='btn btn-outline-light' htmlFor="most-reviewed">Most Reviewed</label>
                </div>
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