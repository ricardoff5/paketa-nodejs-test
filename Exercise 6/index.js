const Signature = require('./Signature');

let sign = new Signature().getInstance();

sign.getId().then((id) => {
    console.log("ID:", id);
});

sign.getGeolocation().then((geolocation) => {
    console.log("geolocation:", geolocation);
});
