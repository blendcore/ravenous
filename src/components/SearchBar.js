import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <div>
                <input className="btn-check" type="radio" name="sortingOptions" id={sortByOption} value={sortByOptionValue} />
                <label className="btn btn-outline-light" for={sortByOption}>{sortByOption}</label>
            </div>;
        });
    };
    return (
        <form className="search-bar" role="search">
            <div className='container'>
                <div className="d-flex mb-3">{renderSortByOptions()}</div>
                <div className="d-sm-flex mb-3">
                    <input className="form-control form-control-lg me-sm-3 mb-3" type="search" placeholder="Search Businesses" aria-label="Search Businesses" />
                    <input className="form-control form-control-lg ms-sm-3 mb-3" type="search" placeholder="Where?" aria-label="Where?" />
                </div>
                <button className="btn btn-warning btn-lg mx-auto d-block" type="submit">Let's go</button>
            </div>
        </form>
    )
}

export default SearchBar;