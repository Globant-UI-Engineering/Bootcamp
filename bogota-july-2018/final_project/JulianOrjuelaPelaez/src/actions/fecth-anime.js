import { FETCH_ANIME } from '../actions/types';
import { FETCHING_ANIME } from '../actions/types';
import { FETCH_SINGLE_ANIME } from '../actions/types';
import { FETCHING_SINGLE_ANIME } from '../actions/types';



export const fetchAnime = (aniName) => dispatch => {
    dispatch({
        type: FETCHING_ANIME,
        isFetchingList: true
    })
    
    fetch(`https://kitsu.io/api/edge/anime?filter%5Btext%5D=${aniName}`)
    .then(response => response.json())
    .then(data => dispatch({
        type: FETCH_ANIME,
        payload: data,
        isFetchingList: false
    })
  )
};

export const fetchingSingleAnime = (aniID) => dispatch => {
    dispatch({
        type: FETCHING_SINGLE_ANIME,
        isFetchingSingle: true
    })

    fetch(`https://kitsu.io/api/edge/anime/${aniID}`)
    .then(response => response.json())
    .then(singelData => dispatch({
        type: FETCH_SINGLE_ANIME,
        payload: singelData,
        isFetchingSingle: false
    })
  )
};