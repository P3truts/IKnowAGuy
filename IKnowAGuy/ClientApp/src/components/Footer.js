import '../css/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer bg-light">
            <span className="navbar-brand" style={{ color: 'black' }}>&copy; {year} Codecool - Sharp Guys</span>
        </footer>
    );
};

export default Footer;