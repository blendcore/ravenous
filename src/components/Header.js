import './Header.css';

const Header = () => {
    return (
        <nav className="header sticky-top d-flex justify-content-center align-items-center bg-warning py-3">
            <a className="logo text-dark" href="/">Ravenous</a>
        </nav>
    )
}

export default Header;