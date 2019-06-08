import * as Constants from '../constants/constants';
import axios from 'axios';
export default class MovieServices{

  nowInTheaters = async () =>{
    let today = new Date();
    let month_ago = new Date();
    month_ago.setMonth(month_ago.getMonth() - 1);
    let today_formatted = this.formatDate(today.getFullYear(), today.getMonth(), today.getDate());
    let month_ago_formatted = this.formatDate(month_ago.getFullYear(),month_ago.getMonth(),month_ago.getDate());
    let url = `${Constants.URL_BODY}discover/movie?primary_release_date.gte=${month_ago_formatted}&primary_release_date.lte=${today_formatted}&api_key=${Constants.API_KEY}`;
    return await axios.get(url);
}

  popularMovies = async () =>{
    let url=`${Constants.URL_BODY}movie/popular?api_key=${Constants.API_KEY}&language=en-US&page=1`;
    return await axios.get(url);
}

  getGenres = async () =>{
    let url = `${Constants.URL_BODY}genre/movie/list?api_key=${Constants.API_KEY}&language=en-US`;
    return await axios.get(url);
  }

  setMoviesByTitle = async(title) =>{
    let url =`${Constants.URL_BODY}search/movie?api_key=${Constants.API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`;
     return await axios.get(url);
  }

  getMovieById = async(id) =>{
    let url = `${Constants.URL_BODY}movie/${id}?api_key=${Constants.API_KEY}`
    return await axios.get(url);
  }

  formatDate = (year, month, day) =>{
      return `${year}-${month+1}-${day}`;
  }

}