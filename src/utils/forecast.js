const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/34301e9f6dfa336acf5d9ddb6b802548/" + latitude + "," + longitude + "?units=si";
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to the internet.", undefined);
        } else if (body.error) {
            callback("Unable to find the location.", undefined)
        } else {
            let hourly = [];
            for (let i = 0; i < 24; i++) {
                hourly[i] = {
                    summary: body.hourly.data[i].summary,
                    icon: body.hourly.data[i].icon,
                    temperature: body.hourly.data[i].temperature,
                }
            }
            let daily = [];
            for (let i = 0; i < 7; i++) {
                daily[i] = {
                    summary: body.daily.data[i].summary,
                    icon: body.daily.data[i].icon,
                    temperatureHigh: body.daily.data[i].temperatureHigh,
                    temperatureLow: body.daily.data[i].temperatureLow,
                }
            }
            callback(undefined, {
                current: {
                    summary: body.currently.summary,
                    icon: body.currently.icon,
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature,
                    uvIndex: body.currently.uvIndex,
                    precipIntensity: body.currently.precipIntensity,
                    precipProbability: body.currently.precipProbability,
                    precipType: body.currently.precipType 
                },
                hourly, // parse in the for loop
                daily   // parse in the for loop
            });
        }
    })
}

module.exports = forecast;