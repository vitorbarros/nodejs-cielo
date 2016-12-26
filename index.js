/**
 * @desc Classe resonsável pelas configurações inciais do módulo de integração com a Cielo
 * @author Vitor Barros
 * @param configFilePath
 * @constructor
 */

var fs = require('fs');

var OnBootstrap = function (configFilePath) {

    //verificando se o arquivo de configuração da Cielo existe
    fs.access(configFilePath, function (err) {
        if (err) {
            throw "File '" + configFilePath + "' dos not exists"
        }
    });

    var configFile = require(configFilePath);
    var preparedObject = {};

};

/**
 * @desc Método que retorna as configurações do módulo
 * @returns {*}
 */
OnBootstrap.prototype.getConfig = function () {
    return configFile;
};

/**
 *
 * @param service
 * @param method
 * @param data
 * @returns {OnBootstrap}
 */
OnBootstrap.prototype.prepare = function (service, method, data) {

    method = method.toLowerCase();
    if (method !== 'get' && method !== 'post') {
        throw "This API supports only POST and GET as a HTTP methods"
    }

    preparedObject = {
        service: service,
        method: method,
        data: data
    };

    return this;
};

/**
 * @desc Método que faz a requisição para a CIELO
 */
OnBootstrap.prototype.request = function () {

    if (!preparedObject.service || !preparedObject.method) {
        throw "Please call 'prepared' method before request";
    }

    //verificando se o serviço está disponível
    fs.access('services/' + preparedObject.service + ".js", function (err) {
        if (err) {
            throw "Service '" + preparedObject.service + "' dos not exists"
        }
    });

    var module = require('./services/' + preparedObject.service);

    if(!module.hasOwnProperty('call')){
        throw "Method 'call' must be implemented"
    }

    return module.call(preparedObject);
};


module.exports = OnBootstrap;