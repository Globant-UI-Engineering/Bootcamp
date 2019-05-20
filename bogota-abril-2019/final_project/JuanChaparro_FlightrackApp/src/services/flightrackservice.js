import {COUNTRIES_URL, AIRPORTS_URL, TIMETABLES_BASE_URL } from './../constants/connections';

export const getCountries = () => getData(COUNTRIES_URL);
export const getAirports = countryCode => getData(AIRPORTS_URL);
export const getArrivals = () => getData(`${TIMETABLES_BASE_URL}FT_ARRIVALS`);
export const getDepartures = () => getData(`${TIMETABLES_BASE_URL}FT_DEPARTURES`);

const getData = (URL) => (
    fetch(URL)
    .then(response => response.json())
    .then(jsonReponse => jsonReponse)
    .catch(error => error)
);
