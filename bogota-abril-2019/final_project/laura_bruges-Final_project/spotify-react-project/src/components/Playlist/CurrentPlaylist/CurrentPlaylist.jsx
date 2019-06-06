import React from 'react';
import { Table, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CurrentPlaylist = ({ tracks, currTrack }) => {
    return (
        <section>
            <Row className='playlist-content'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Artist</th>
                            <th>Album</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tracks.map((track) => {
                            return (<tr>
                                {/* tds shuld be PlaylistItem */ }
                                <td>{ track.id === currTrack ? "NP" : "" }</td>
                                <td>{ track.name }</td>
                                <td>{ track.artists[0].name }</td>
                                <td>{ track.album.name }</td>
                            </tr>)
                        }) }
                    </tbody>
                </Table>
            </Row>            
        </section>       
    );

}

CurrentPlaylist.propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object),
    currTrack: PropTypes.string
}

export default CurrentPlaylist;