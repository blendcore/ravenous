import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form className="search-bar" role="search">
            <div className='container'>
                <div className='d-flex mb-3'>
                    <div>
                        <input className="btn-check" type="radio" name="sortingOptions" id="sortingOption1" value="Best Match" />
                        <label className="btn btn-outline-light" for="sortingOption1">Best Match</label>
                    </div>
                    <div>
                        <input className="btn-check" type="radio" name="sortingOptions" id="sortingOption2" value="Highest Rated" />
                        <label className="btn btn-outline-light" for="sortingOption2">Highest Rated</label>
                    </div>
                    <div>
                        <input className="btn-check" type="radio" name="sortingOptions" id="sortingOption3" value="Most Reviewed" />
                        <label className="btn btn-outline-light" for="sortingOption3">Most Reviewed</label>
                    </div>
                </div>
                <div className="d-sm-flex mb-3">
                    <input className="form-control form-control-lg me-sm-3 mb-3" type="search" placeholder="Search Businesses" aria-label="Search Businesses" />
                    <input className="form-control form-control-lg ms-sm-3 mb-3" type="search" placeholder="Where?" aria-label="Where?" />
                </div>
                <button className="btn btn-warning btn-lg mx-auto d-block" type="submit">Let's go</button>
            </div>
        </form>
    )
}