import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "../css/Layout.css";

const Layout = ({ children }) => {
    return (
        <div>
            <NavMenu />
            <div className="page-container">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
