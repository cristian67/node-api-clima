const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion cuidad',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng)
        return `el clima en ${coords.direccion} tiene una temperatura de ${temp} C°`;

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));