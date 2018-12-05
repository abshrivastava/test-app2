import React from "react";
import FormContainer from "./js/components/container/FormContainer";

const API_KEY = "a5774b19c0bb713704ac27aad1764191"

class App extends React.Component {

    // var root = 'http://fakerestapi.azurewebsites.net';
    // $.ajax({
    //     url: root + '/posts/1',
    //     method: 'GET'
    // }).then(function (data) {
    //     alert(data);
    // });

    getWeather = async () => {
        const dummy_api = await fetch(`http://fakerestapi.azurewebsites.net:80/swagger/docs/v1`)
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={API_KEY}`)
        const data = await api_call.json()
        console.log("data>>>>>", data)
    }
    render() {
        return ( 
            <div>
            <FormContainer getWeather = {this.getWeather}/> 
            </div>
        );
    };
};
export default App;