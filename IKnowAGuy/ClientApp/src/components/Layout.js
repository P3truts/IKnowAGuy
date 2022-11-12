import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "../css/Layout.css";

const Layout = ({ children, username }) => {
    console.log("layout username", typeof(username));
    return (
        <div>
            <NavMenu username={username} />
                <div className="container my-4">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
