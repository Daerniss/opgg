import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/league/v4/positions/by-summoner/",
  headers: {
    "X-Riot-Token": "RGAPI-251f1757-33ff-41a3-9547-dd9c86520511",
    "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7"
  }
});
