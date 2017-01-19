/**
 * @desc Classe de validação
 */
var creditCardSimplePaymentValidation = function () {

};

/**
 * @desc Método que verifica a configuração do objeto para pagamento com cartão de crédito
 * @param preparedObject
 * @returns {boolean}
 */
creditCardSimplePaymentValidation.prototype.validate = function (preparedObject) {

    //validando informações básicas
    if (!preparedObject.MerchantOrderId || !preparedObject.Customer || !preparedObject.Customer.Name) {
        throw "MerchantOrderId, Customer and Customer.Name are required";
    }

    //validando as indformações de pagamento
    if (!preparedObject.Payment) {
        throw "Payment is required";
    }

    //validando as informações do tipo pagamento
    if (!preparedObject.Payment.Type || preparedObject.Payment.Type !== "CreditCard") {
        throw "Type is required, and type must be CreditCard";
    }

    //validando as indformações de pagamento
    if (!preparedObject.Payment.Amount || !preparedObject.Payment.Installments || !preparedObject.Payment.SoftDescriptor) {
        throw "Amount, Installments and SoftDescriptor are required";
    }

    //validando o cartão de crédito
    if(!preparedObject.Payment.CreditCard){
        throw "CreditCard is required";
    }

    //validando o cartão de crédito
    if( !preparedObject.Payment.CreditCard.CardNumber ||
        !preparedObject.Payment.CreditCard.Holder ||
        !preparedObject.Payment.CreditCard.ExpirationDate ||
        !preparedObject.Payment.CreditCard.SecurityCode ||
        !preparedObject.Payment.CreditCard.Brand){
            throw "CardNumber, Holder, ExpirationDate, SecurityCode and Brand are required";
    }

    return true;
};

module.exports = creditCardSimplePaymentValidation;