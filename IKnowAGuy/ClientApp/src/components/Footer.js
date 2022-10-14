import '../css/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="navbar footer navbar-expand-lg bg-light">
        <div className="container-fluid">
            <span className="navbar-brand">&copy; {year}</span>
        </div>
        </footer>
    );
};

export default Footer;