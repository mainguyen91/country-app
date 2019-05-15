var countryName = process.argv[2];
var fs = require('fs');
var fileReader = require('./helper/json-file-reader.js');

fileReader('./resource/countries.json', function (contents) {
    contents.find(function (country) {
        if (country.name === countryName) {
            console.log('Country: ' + country.name)
            console.log('Top Level Domain: ' + country.topLevelDomain)
        }
    })
})

