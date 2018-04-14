/**
 * @desc Classe de validação
 */
var generateCardTokenValidation = function () {

};

/**
 * @desc Método que verifica a configuração do objeto para tokenrização de cartão de crédito
 * @param preparedObject
 * @returns {boolean}
 */
generateCardTokenValidation.prototype.validate = function (preparedObject) {

    //validando o cartão de crédito
    if( !preparedObject.CustomerName ||
        !preparedObject.CardNumber ||
        !preparedObject.Holder ||
        !preparedObject.ExpirationDate ||
        !preparedObject.Brand){
        throw "CustomerName, CardNumber, Holder, ExpirationDate and Brand are required";
    }

    return true;
};

module.exports = generateCardTokenValidation;