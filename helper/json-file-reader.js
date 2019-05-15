var fs = require('fs');

var fileReader = function (filename, callback) {
    fs.readFile(filename, 'utf8', function (err, contents) {
        if (err) {
            throw err;
        };
        var info = JSON.parse(contents);
        return callback(info)
    });
}
module.exports = fileReader;