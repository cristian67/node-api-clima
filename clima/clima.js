const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8301a5e7015192e1ccb7edc75d80b9ee`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No se encuentra la posicion ${lat}, ${lng}`);
    }

    return resp.data.main.temp;

    // return {
    //     direccion: location.main,
    //     lat: coors.lat,
    //     lng: coors.lng
    // }
}

module.exports = {
    getClima
}