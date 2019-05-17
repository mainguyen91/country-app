const fs = require('fs');

let fileReader = function (filename, callback) {
    fs.readFile(filename, 'utf8', function (err, contents) {
        if (err) {
            throw err;
        };
        let info = JSON.parse(contents);
        return callback(info)
    });
}
module.exports = fileReader;