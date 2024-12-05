// Layout.jsx
import Header from './Header';
import Footer from './Footer';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

 
