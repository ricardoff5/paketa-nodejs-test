class Geolocation {
    constructor() {
        this.location = {};
    }
    async getGeolocation() {
        return await {
            location: {
                latitude: 13434554,
                longitude: 34343435
            }
        }
    }
}

module.exports = Geolocation;