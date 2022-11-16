import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "../css/Layout.css";

const Layout = ({ children }) => {
    return (
        <div id="page-container">
            <NavMenu />
                <div id="content-wrap">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
