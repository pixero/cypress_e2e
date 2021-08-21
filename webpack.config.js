const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve('./cypress'),
            path.resolve('./node_modules'),
        ],
    },
};
