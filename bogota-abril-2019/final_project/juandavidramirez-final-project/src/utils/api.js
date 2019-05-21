import axios from 'axios';

const apiCredentials = {
    key: process.env.API_KEY,

};

const apiStaticUrl = "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json";

const apiUrl = "https://la1.api.riotgames.com/lol";

export function getChampions(callback) {
    axios
    .get(apiStaticUrl)
    .then(function(response) {
      callback.onSuccess(response);
    })
    .catch(function(error) {
      callback.onFailed(error);
    });
}

export function getSummoner(summonerName, callback){
    axios
    .get(apiUrl + "/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + apiCredentials.key)
    .then(function(response) {
      callback.onSuccess(response);
    })
    .catch(function(error) {
      callback.onFailed(error);
    });
}

export function getChallengerLeagueByQueue(queue, callback){
    axios
    .get(apiUrl + "/league/v4/challengerleagues/by-queue/" + queue + "?api_key=" + apiCredentials.key)
    .then(function(response) {
      callback.onSuccess(response);
    })
    .catch(function(error) {
      callback.onFailed(error);
    });
}