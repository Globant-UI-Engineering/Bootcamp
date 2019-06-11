import React from 'react';
import Footer from '../../Generic/Footer';
import GenericHeader from '../../Generic/Header/GenericHeader';
import NotLoggedRedirectorContainer from '../../../containers/NotLoggedRedirectorContainer';
import Welcome from './Welcome';
import Register from './Register';

class MePage extends React.Component {
    render() {
        return (
            <div className="register form">
                <NotLoggedRedirectorContainer/>
                <GenericHeader />
                <div className="column_container">
                    <article className="left_column">
                        <Register />
                    </article>
                    <article className="right_column">
                        <Welcome />
                    </article>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MePage;