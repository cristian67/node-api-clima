const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No se encuentra la direccion ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    // console.log('direccion', location.formatted_address);
    // console.log('lat', coors.lat);
    // console.log('lng', coors.lng);
    //console.log(JSON.stringify(resp.data, undefined, 2));
    //console.log(resp.status);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng

}