import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter} from 'react-router-dom';
import {Header} from './Header';
import {Footer} from './Footer';
import './App.less';

function App({children}) {
    return (
        <HashRouter>
            <div className={'appshell-container'}>
                <Header />
                <div className="appshell-content">{children}</div>
                <Footer />
            </div>
        </HashRouter>
    );
}

App.propTypes = {
    children: PropTypes.Any
};

export default App;
