const path = require('path');


module.exports = {
    entry: './src/script.js',
    mode: 'production',
    target: 'web',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    }
};