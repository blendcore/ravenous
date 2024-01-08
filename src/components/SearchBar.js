export default function SearchBar(props) {
    return (
        <form className="search-bar my-3" role="search">
            <div className="d-sm-flex">
                <input className="form-control me-sm-3 mb-3" type="search" placeholder="Search Businesses" aria-label="Search Businesses" />
                <input className="form-control ms-sm-3 mb-3" type="search" placeholder="Where?" aria-label="Where?" />
            </div>
            <button className="btn btn-warning mx-auto d-block" type="submit">Let's go</button>
        </form>
    )
}