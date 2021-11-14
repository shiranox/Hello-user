import { Button } from "semantic-ui-react";
import React, {useState, useEffect} from "react";


function SearchComponent () {
    const API_KEY = "5dA7y76VBGlG0oggXay36FgXCTaVFJwh";
    const [weather, setWeather] = useState([{}]);
    const [city, setCity] = useState ("");

    /*
    const getWeather = async (event) => {
        if (event.key == "Enter"){
            await fetch (`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}`);
        }
    }
    */
    const getCity = async (city) => {
        const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
        const query = `?apikey=${API_KEY}&q=${city}`;
        const res = await fetch (baseUrl + query);
        const data = await res.json();
        //return data[0];
        return setWeather(data[0]);
    }
    const getWeatherDetails = async (id) => {

        const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
        const query = `${id}?apikey=${API_KEY}`;
        const res = await fetch (baseUrl + query);
        const data = await res.json();
       // return data[0];
        return setCity(data[0]);
    }
    return (
            <form> 
                <input 
                type = "text" 
                name = "city"
                placeholder = "City..."
                //onChange={e=> setCity(e.target.value)}
                //value={city}
                //onKeyPress={getWeatherDetails}
                >
                </input>
            <Button> Get weather </Button>
            </form> 
    );
}

export default SearchComponent;