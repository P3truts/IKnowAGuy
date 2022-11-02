import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "../css/Layout.css";

const Layout = ({ children }) => {
    return (
        <div>
            <NavMenu />
            <div className="container my-4">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
