import React, {Component} from 'react';
import store from '../../../../store';

const API_KEY="ecb9de45f141eebe0b868927e7fb6fbb";
class Form extends Component{

      captureWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        store.dispatch({
            type:"SEND_INFO",
            
            data:{
                countries:data.sys.country,
                cities:data.name,
                temperature:data.main.temp,
                humdities:data.main.humidity,
                descriptions:data.weather[0].description,
            }
        })
         
       }
      render(){
          return(
              <form className="formClimate"onSubmit={this.captureWeather}>
                  <p>Specify the Climate You Want and Find the Places that Match</p>
                  <input type="text" name="city" placeholder="City"/>
                  <input type="text" name="country" placeholder="Country"/> 
                  <button className="close">Get</button>
              </form>
          )
      }   
}
export default Form;