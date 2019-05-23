import {
    COUNTRIES_URL, 
    AIRPORTS_URL, 
    TIMETABLES_ARRIVALS, 
    TIMETABLES_DEPARTURES,
    FLIGHTS
} from './../constants/connections';

export const getCountries = () => getData(COUNTRIES_URL);
export const getAirports = countryCode => getData(AIRPORTS_URL);
export const getArrivals = () => getData(TIMETABLES_ARRIVALS);
export const getDepartures = () => getData(TIMETABLES_DEPARTURES);
export const getFlights = () => getData(FLIGHTS);

const getData = (URL) => (
    fetch(URL)
    .then(response => response.json())
    .then(jsonReponse => jsonReponse)
    .catch(error => error)
);
