import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "../css/Layout.css";

const Layout = ({ children, username }) => {
    console.log("layout username", typeof(username));
    return (
        <div id="page-container">
            <NavMenu username={username} />
                <div id="content-wrap">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
