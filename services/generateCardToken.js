/**
 * @desc Método que faz uma tokenrização do cartão de crédito
 * @author Vitor Barros
 * @constructor
 */

var getCardToken = function () {

};

getCardToken.prototype.call = function (preparedObject, callback) {

    var options = {
        uri: 'https://' + preparedObject.credentials.baseUrl + '/1/card/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'MerchantId': preparedObject.credentials.MerchantId,
            'MerchantKey': preparedObject.credentials.MerchantKey
        },
        body: preparedObject.data,
        json: true
    };

    var request = require('request-promise');

    request(options)
        .then(function (response) {
            if (response instanceof Array && response[0]) {
                callback(null, {
                    message: response[0].Message
                })
            } else {
                callback(response, null);
            }
        })
        .catch(function (err) {
            callback(err, null);
        });
};

module.exports = getCardToken;