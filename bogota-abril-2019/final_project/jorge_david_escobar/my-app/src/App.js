import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import WeatherCard from './components/WeatherCard';
import NewsCard from './components/NewsCard';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom';
import NewsPage from './components/NewsPage';
import WeatherPage from './components/WeatherPage';
import Profile from './components/profile';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const weather_api_key = "36e2fa16b70a4422ed609a5ad91f71f5";
const news_api_key = "baf89e91a399451dbf982a015897aea1";

firebase.initializeApp({
  apiKey: "AIzaSyB_BJ35TyfDJSbCulXcWIJNImdNvy-fBSI",
  authDomain: "weather-and-news-app.firebaseapp.com"
})

class App extends React.Component {

  state = {
    isSignedIn: false,
    temperature: undefined,
    presure: undefined,
    min_temp: undefined,
    max_temp: undefined,
    visibility: undefined,
    long: undefined,
    lat: undefined,
    city: "city",
    description: "Description",
    humidity: undefined,
    wind_speed: undefined,
    country: undefined,
    news: [1],
    newsImage: ["https://www.allenreproduction.com/wp-content/uploads/2016/08/latest_news_header_03.jpg"],
    newsTitle: ["pick a city to get the latest news"],
    newsContent: [],
    newsLink: [],
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  getWeather = (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weather_api_key}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (city) {
          this.setState({
            presure: data.main.pressure + " hpa",
            min_temp: data.main.temp_min + "°C",
            max_temp: data.main.temp_max + "°C",
            visibility: (data.visibility / 1000) + " Km",
            long: data.coord.lon,
            lat: data.coord.lat,
            wind_speed: data.wind.speed + " Km/H",
            city: data.name,
            description: data.weather[0].main,
            temperature: data.main.temp + "°C",
            humidity: data.main.humidity + "%",
            country: data.sys.country
          });
        } else {
          alert("Please enter a city name to get the weather and latest news");
        }        
        this.getNews();        
      });
  }

  getNews = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=${news_api_key}`)
      .then(response => response.json())
      .then(data => {
        var imageUrl = [];
        var title = [];
        var url = [];
        var content = [];
        for (const i of data.articles) {
          imageUrl.push(i.urlToImage)
        }
        for (const i of data.articles) {
          title.push(i.title)
        }
        for (const i of data.articles) {
          url.push(i.url)
        }
        for (const i of data.articles) {
          content.push(i.content)
        }
        this.setState({
          news: data.articles,
          newsImage: imageUrl,
          newsTitle: title,
          newsContent: content,
          newsLink: url
        });
      })
  }

  render() {
    const news = this.state.news.slice(0, 2).map((index, i) => {      
      return (
        <NewsCard
          key={this.state.newsTitle[i]}
          image={this.state.newsImage[i]}
          title={this.state.newsTitle[i]}
          link={this.state.newsLink[i]}
        ></NewsCard>
      )
    });
    var newsPage = this.state.news.map((index, i) => {
      return (
        <NewsPage
          key={this.state.newsTitle[i]}
          image={this.state.newsImage[i]}
          title={this.state.newsTitle[i]}
          content={this.state.newsContent[i]}
          link={this.state.newsLink[i]}
        ></NewsPage>
      )
    });
    return (
      <Router>
        <div className="App">
          {this.state.isSignedIn ?
            <div>
              <header>
                <NavBar
                  getWeather={this.getWeather}
                  signOut={() => firebase.auth().signOut()}></NavBar>
              </header>
              <main>
                <Switch>
                  <Route path="/home" render={
                    props =>
                      <div className="container-fluid">
                        <div className="row">
                          <WeatherCard
                            city={this.state.city}
                            country={this.state.country}
                            description={this.state.description}
                            temperature={this.state.temperature}
                            humidity={this.state.humidity}
                          ></WeatherCard>
                          <div className="col-sm-12 col-lg-6 nonSpace">
                            <section>
                              <div className="container newsCard">
                                <div className="row">
                                  {news}
                                </div>
                                <Link to="/news" className="btn btn-warning">More news about {this.state.country}</Link>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                  } />
                  <Route path="/news" render={
                    props =>
                      <div className="container-fluid newsPage pt-4">
                        <div className="row ">
                          {newsPage}

                        </div>
                      </div>
                  } />
                  <Route path="/weather_deatils" render={
                    props =>
                      <div className="container-fluid weatherCard pt-4">
                        <div className="row p-5 ">
                          <WeatherPage
                            city={this.state.city}
                            description={this.state.description}
                            temperature={this.state.temperature}
                            min_temp={this.state.min_temp}
                            max_temp={this.state.max_temp}
                            humidity={this.state.humidity}
                            pressure={this.state.presure}
                            visibility={this.state.visibility}
                            wind_speed={this.state.wind_speed}
                          />
                        </div>
                      </div>
                  } />
                  <Route path="/profile" render={
                    props =>
                      <Profile
                        profileImg={firebase.auth().currentUser.photoURL}
                        profileName={firebase.auth().currentUser.displayName}
                        email={firebase.auth().currentUser.email}
                      />
                  } />
                  <Redirect from="/" to="/home" />
                </Switch>
              </main>
            </div>
            :
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          }
        </div>
      </Router >
    );
  }
}

export default App;