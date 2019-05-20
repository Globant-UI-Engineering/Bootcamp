import React from 'react';
import Footer from '../Generic/Footer';
import GenericHeader from '../Generic/GenericHeader';
import RegisterContainer from '../../containers/RegisterContainer';
import NotLoggedRedirectorContainer from '../../containers/NotLoggedRedirectorContainer';
import Welcome from './Welcome';

class MePage extends React.Component {
    render() {
        return (
            <div className="register">
                <NotLoggedRedirectorContainer/>
                <GenericHeader />
                <div className="column_container">
                    <article className="left_column">
                        <RegisterContainer />
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