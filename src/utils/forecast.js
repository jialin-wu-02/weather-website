const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/34301e9f6dfa336acf5d9ddb6b802548/" + latitude + "," + longitude + "?units=si";
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to the internet.", undefined);
        } else if (body.error) {
            callback("Unable to find the location.", undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " 
            + body.currently.temperature + " degrees out. There is a " 
            + body.currently.precipProbability + "% chance of rain.");
        }
    })
}

module.exports = forecast;