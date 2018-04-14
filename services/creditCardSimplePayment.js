/**
 * @desc Método que faz uma cobraça simpes com cartão de crédito
 * @author Vitor Barros
 * @constructor
 */

var creditCardSimplePayment = function () {

};

creditCardSimplePayment.prototype.call = function (preparedObject, callback) {

    var options = {
        uri: 'https://' + preparedObject.credentials.baseUrl + '/1/sales',
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

            var statusTransaction = require('./../status/status');
            var transaction = new statusTransaction();

            var message = null;

            if (response.Payment) {
                message = transaction.getStatusTransaction(response.Payment.Status, response.Payment.ReturnCode);
            } else {
                message = transaction.getStatusTransaction(3, "01");
            }

            if (message) {
                callback(null, {
                    message: message
                })
            } else {
                callback(response, null);
            }
        })
        .catch(function (err) {
            callback(err, null);
        });
};

module.exports = creditCardSimplePayment;