import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routers from '../../routers/Routers';
class Layout extends Component {
    render() {
        return (
            <>
            <Header/>
            <div>
                <Routers></Routers>
            </div>
            <Footer/>
            </>
        );
    }
}

export default Layout;