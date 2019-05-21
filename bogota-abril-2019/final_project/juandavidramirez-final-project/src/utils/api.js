import axios from "axios";

const apiInfo = {
  key: process.env.API_KEY,
  apiStaticUrl: {
    data: "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US",
    img: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img"
  },
  apiUrl: "https://la1.api.riotgames.com/lol"
};

const concatApiKey = () => {
  return "?api_key=" + apiInfo.key;
};

export function getChampions(callback) {
  axios
    .get(apiInfo.apiStaticUrl.data + "/champion.json")
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
      apiInfo.apiUrl +
        "/summoner/v4/summoners/by-name/" +
        summonerName +
        concatApiKey
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
      apiInfo.apiUrl +
        "/league/v4/challengerleagues/by-queue/" +
        queue +
        concatApiKey
    )
    .then(function(response) {
      callback.onSuccess(response);
    })
    .catch(function(error) {
      callback.onFailed(error);
    });
}
