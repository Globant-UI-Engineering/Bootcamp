import React from 'react';

const GenreOption = (props) => {
    const {id,name}  = props.genre;
    return (
        <option value={id}>{name}</option>
    );
};

export default GenreOption;