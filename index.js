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

};

/**
 * @desc Método que retorna as configurações do módulo
 * @returns {*}
 */
OnBootstrap.prototype.getConfig = function () {
    return configFile;
};

OnBootstrap.prototype.prepare = function (url, method, data) {

    method = method.toLowerCase();
    if (method !== 'get' && method !== 'post') {
        throw "This API supports only POST and GET as a HTTP methods"
    }

    

};

module.exports = OnBootstrap;