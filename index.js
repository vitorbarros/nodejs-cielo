/**
 * @desc Classe resonsável pelas configurações inciais do módulo de integração com a Cielo
 * @author Vitor Barros
 * @constructor
 */
var OnBootstrap = function () {

    var credentials = {};
    var preparedObject = {};

};

OnBootstrap.prototype.setCredentials = function (_credentials) {
    credentials = _credentials;
};

/**
 * @desc Método que retorna as credenciais do módulo
 * @returns {*}
 */
OnBootstrap.prototype.getCredentials = function () {
    return credentials;
};

/**
 *
 * @param service
 * @param data
 * @returns {OnBootstrap}
 */
OnBootstrap.prototype.prepare = function (service, data) {

    if (!credentials.baseUrl || !credentials.MerchantId || !credentials.MerchantKey) {
        throw "baseUrl, MerchantId, MerchantKey is required";
    }

    preparedObject = {
        service: service,
        data: data,
        credentials: OnBootstrap.prototype.getCredentials()
    };

    return this;
};

/**
 * @desc Método que faz a requisição para a CIELO
 */
OnBootstrap.prototype.request = function (_callback) {

    if (!preparedObject.service || !preparedObject.credentials) {
        throw "Please call 'prepare' method before request";
    }

    //chamando o módulo
    var module = require('./services/' + preparedObject.service);
    var mod = new module();

    //chamando a validação do módulo
    var val = require('./validate/' + preparedObject.service + 'Validation');
    var validation = new val();

    try {

        validation.validate(preparedObject.data);
        mod.call(preparedObject, _callback);

    } catch (e) {
        throw e;
    }
};


module.exports = OnBootstrap;