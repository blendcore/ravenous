import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form className="search-bar" role="search">
            <div className='container'>
                <div className="d-sm-flex mb-3">
                    <input className="form-control form-control-lg me-sm-3 mb-3" type="search" placeholder="Search Businesses" aria-label="Search Businesses" />
                    <input className="form-control form-control-lg ms-sm-3 mb-3" type="search" placeholder="Where?" aria-label="Where?" />
                </div>
                <button className="btn btn-warning btn-lg mx-auto d-block" type="submit">Let's go</button>
            </div>
        </form>
    )
}