import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const DeviceControl = ({ options, currentDevice, onSelectDevice }) => {
    return (
        <div className='device-container'>
            <select className='custom-select' onChange = {(event) =>  onChangeDevice(event, onSelectDevice) }>
                {options.map((device) => {
                    return <option defaultValue={ currentDevice } value={ device.id }>{ device.name }</option>
                })}                
            </select>
            
        </div>
    );
};

function onChangeDevice(event, onSelectDev) {
    let val = event.target.value;
    onSelectDev(val);
}

DeviceControl.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onSelectDevice: PropTypes.func
}


export default DeviceControl;