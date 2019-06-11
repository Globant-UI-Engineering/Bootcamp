import axios from "axios";
import { apiStaticUrl, apiUrl } from "./Constants/urls";

const key = process.env.API_KEY;

const concatApiKey = option => {
  return option + "api_key=" + key;
};

export function getChampions(callback) {
  axios
    .get(apiStaticUrl.data + "/champion.json")
    .then(response => {
      callback.onSuccess(response);
    })
    .catch(error => {
      callback.onFailed(error);
    });
}

export function getChampion(key, callback) {
  var championsCallback = {
    onSuccess: response => {
      callback.onSuccess({ data: response.data.data[key] });
    },
    onFailed: error => {
      callback.onFailed(error);
    }
  };
  getChampions(championsCallback);
}

export function getSummoner(summonerName, callback) {
  axios
    .get(
      apiUrl +
        "/summoner/v4/summoners/by-name/" +
        summonerName +
        concatApiKey("?")
    )
    .then(response => {
      callback.onSuccess(response);
    })
    .catch(error => {
      callback.onFailed(error);
    });
}

export function getSummonerById(id, callback) {
  axios
    .get(apiUrl + "/summoner/v4/summoners/" + id + concatApiKey("?"))
    .then(response => {
      callback.onSuccess(response);
    })
    .catch(error => {
      callback.onFailed(error);
    });
}

export function getSummonerMatches(number, accountId, callback) {
  axios
    .get(
      apiUrl +
        "/match/v4/matchlists/by-account/" +
        accountId +
        "?endIndex=" +
        number +
        concatApiKey("&")
    )
    .then(response => {
      callback.onSuccess(response);
    })
    .catch(error => {
      callback.onFailed(error);
    });
}

export function getChallengerLeagueByQueue(queue, callback) {
  axios
    .get(
      apiUrl +
        "/league/v4/challengerleagues/by-queue/" +
        queue +
        concatApiKey("?")
    )
    .then(response => {
      callback.onSuccess(response);
    })
    .catch(error => {
      callback.onFailed(error);
    });
}
