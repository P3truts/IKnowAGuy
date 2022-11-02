import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "../css/Layout.css";

const Layout = () => {
    return (
        <div>
            <NavMenu />
            <div className="page-container">{this.props.children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
