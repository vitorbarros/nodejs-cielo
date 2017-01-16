/**
 * @desc Método que faz uma cobraça simpes com cartão de débito
 * @author Vitor Barros
 * @constructor
 */

var debitCardSimplePayment = function () {

};

debitCardSimplePayment.prototype.call = function (preparedObject, callback) {

    var http = preparedObject.credentials.ssl ? require('https') : require('http');

    var options = {
        host: preparedObject.credentials.baseUrl,
        path: '/1/sales',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'MerchantId': preparedObject.credentials.MerchantId,
            'MerchantKey': preparedObject.credentials.MerchantKey
        }
    };

    var req = http.request(options, function (res) {

        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            callback(chunk, null);
        });

    });

    req.on('error', function (e) {
        callback(null, e);
    });

    //transformando o objeto
    req.write(JSON.stringify(preparedObject.data));

    req.end();
};

module.exports = debitCardSimplePayment;