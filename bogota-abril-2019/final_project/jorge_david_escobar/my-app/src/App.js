import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import WeatherCard from './components/WeatherCard';
import NewsCard from './components/NewsCard';
import { async } from 'q';


const weather_api_key = "36e2fa16b70a4422ed609a5ad91f71f5";
const news_api = "baf89e91a399451dbf982a015897aea1";
class App extends React.Component {

  constructor(){
    super();
    
  }
  state = {
    city: "city",
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    time: undefined,
    country: undefined,
    news: [1],
    newsImage: ["https://www.allenreproduction.com/wp-content/uploads/2016/08/latest_news_header_03.jpg"],
    newsTitle: ["pick a city to get the latest news"],
    newsContent: []
  }

  getWeatherNews(e) {
    e.preventDefault();
    this.getWeather;
    
  }

  getWeather = async function weather(e){    
    const city = e.target.elements.city.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weather_api_key}&units=metric`);
    const weather_object = await api_call.json();
    if (city) {
      this.setState({
        city: weather_object.name,
        description: weather_object.weather[0].main,
        temperature: weather_object.main.temp + "°C",
        humidity: weather_object.main.humidity + "%",
        country: weather_object.sys.country
      });      
      console.log(this.state.news.slice(0,3))
    } else {
      this.setState({
        city: "city",
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        time: undefined,
      });
      alert("Please enter a city name to get the weather");
    }

  }

  getNews = async function news(e) {
    const news_api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=${news_api}`);
    var news_json = await news_api_call.json();
    var imageUrl, title, url = [];
    for (let i = 0; i < news_json.articles.length; i++) {
      imageUrl.push(news_json.articles[i].urlToImage)
    }
    for (let i = 0; i < news_json.articles.length; i++) {
      title.push(news_json.articles[i].title)
    }
    for (let i = 0; i < news_json.articles.length; i++) {
      url.push(news_json.articles[i].url)
    }
    this.setState({
      news: news_json.articles,
      newsImage: imageUrl,
      newsTitle: title,
      newsContent: url
    });
  }

  render() {    
    const news = this.state.news.slice(0,2).map((item, i) => {
      return (
        <NewsCard
          image={this.state.newsImage[i]}
          title={this.state.newsTitle[i]}
          content={this.state.newsContent[i]}
        ></NewsCard>
      )
    });

    return (
      <div className="App">
        <NavBar getWeather={this.getWeatherNews}></NavBar>
        <div className="container-fluid">
          <div className="row">

            <WeatherCard
              city={this.state.city}
              description={this.state.description}
              temperature={this.state.temperature}
              humidity={this.state.humidity}
            ></WeatherCard>

            <div className="col-sm-12 col-lg-6 nonSpace" id="newsCard">
              <div className="container">
                <div className="row">
                  {news}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;