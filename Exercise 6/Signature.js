const { v4: uuidv4 } = require('uuid');
const Geolocation = require('./Geolocation');

class Signature {

    constructor() {
        this.id = 0;
        this.geolocation = {};
    }

    async getId() {
        let id = await uuidv4();
        return { id }
    }

    async getGeolocation() {
        let position = await new Geolocation().getGeolocation();
        return { geolocation: position.location }
    }

}

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Signature();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

}

module.exports = Singleton;