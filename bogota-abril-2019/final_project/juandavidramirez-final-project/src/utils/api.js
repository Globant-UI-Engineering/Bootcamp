import axios from "axios";
import { apiStaticUrl, apiUrl } from "./Constants/urls";

const key = process.env.API_KEY;

const concatApiKey = () => {
  return "?api_key=" + key;
};

export function getChampions(callback) {
  axios
    .get(apiStaticUrl.data + "/champion.json")
    .then(function(response) {
      callback.onSuccess(response);
    })
    .catch(function(error) {
      callback.onFailed(error);
    });
}

export function getSummoner(summonerName, callback) {
  axios
    .get(
        apiUrl +
        "/summoner/v4/summoners/by-name/" +
        summonerName +
        concatApiKey()
    )
    .then(function(response) {
      callback.onSuccess(response);
    })
    .catch(function(error) {
      callback.onFailed(error);
    });
}

export function getChallengerLeagueByQueue(queue, callback) {
  axios
    .get(
        apiUrl +
        "/league/v4/challengerleagues/by-queue/" +
        queue +
        concatApiKey()
    )
    .then(function(response) {
      callback.onSuccess(response);
    })
    .catch(function(error) {
      callback.onFailed(error);
    });
}
