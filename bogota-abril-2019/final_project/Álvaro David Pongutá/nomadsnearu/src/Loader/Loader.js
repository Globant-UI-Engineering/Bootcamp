import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.scss';

class LoaderReact extends React.Component {
    render () {
        return (
            <div role="presentation" className= 'App-loader-container'>
                    <div className= {(this.props.className === undefined ? `App-loader` : `${this.props.className}`)}>
                        <Loader 
                            type="Oval"
                            color="#282c34"
                            height="75"	
                            width="75"
                        />  
                    </div>
            </div>
        );
    }
}

export default LoaderReact;