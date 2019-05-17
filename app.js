// Part 1:
const countryname = process.argv[2]
const fs = require('fs');

fs.readFile('./resource/countries.json', function (err, contents) {
    if (err) {
        throw error
    };
    let jsondata = JSON.parse(contents)
    jsondata.forEach(function (country) {
        if (country.name === countryname) {
            console.log('Country: ' + country.name)
            console.log('Top level domain: ' + country.topLevelDomain)
        }
    })
})



// // Part 2:
// const countryName = process.argv[2];
// const fs = require('fs');
// const fileReader = require('./helper/json-file-reader.js');

// fileReader('./resource/countries.json', function (contents) {
//     contents.find(function (country) {
//         if (country.name === countryName) {
//             console.log('Country: ' + country.name)
//             console.log('Top Level Domain: ' + country.topLevelDomain)
//         }
//     })
// })