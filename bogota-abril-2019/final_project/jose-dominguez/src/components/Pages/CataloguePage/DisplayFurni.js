import React from 'react';
import PropTypes from 'prop-types';

class DisplayFurni extends React.Component {
    render() {
        const { image, name, description } = this.props;
        return (
            <>
                <h1 className="green">Información</h1>

                <br />
                <img src={image} alt={name} />
                <br />

                <h2>
                    {name}
                </h2>
                <p>
                    {description}
                </p>

            </>
        );
    }
}

DisplayFurni.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
};

export default DisplayFurni;