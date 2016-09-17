var packageJson = require('../package.json');

function RootController () {

    return {

        getEntrypoint : function (req, res) {
            var apiInfo = {
                name : packageJson.name,
                version : packageJson.version
            };
            res.send(apiInfo);

        }

    };
}

module.exports = RootController;
