import React from 'react';
import App from './App';
import PropTypes from 'prop-types';

function StandardLayout({title, children}) {
    return <App title={title}>{children}</App>;
}

StandardLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.Any
};

export default StandardLayout;
