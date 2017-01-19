/**
 * @desc Classe de validação
 */
var debitCardSimplePaymentValidation = function () {

};

/**
 * @desc Método que verifica a configuração do objeto para pagamento com cartão de débito
 * @param preparedObject
 * @returns {boolean}
 */
debitCardSimplePaymentValidation.prototype.validate = function (preparedObject) {

    //validando informações básicas
    if (!preparedObject.MerchantOrderId || !preparedObject.Customer || !preparedObject.Customer.Name) {
        throw "MerchantOrderId, Customer and Customer.Name are required";
    }

    //validando as indformações de pagamento
    if (!preparedObject.Payment) {
        throw "Payment is required";
    }

    //validando as informações do tipo pagamento
    if (!preparedObject.Payment.Type || preparedObject.Payment.Type !== "DebitCard") {
        throw "Type is required, and type must be DebitCard";
    }

    //validando as indformações de pagamento
    if (!preparedObject.Payment.Amount || !preparedObject.Payment.Installments || !preparedObject.Payment.SoftDescriptor || !preparedObject.Payment.ReturnUrl) {
        throw "Amount, Installments, SoftDescriptor and ReturnUrl are required";
    }

    //validando o cartão de crédito
    if(!preparedObject.Payment.DebitCard){
        throw "DebitCard is required";
    }

    //validando o cartão de crédito
    if( !preparedObject.Payment.DebitCard.CardNumber ||
        !preparedObject.Payment.DebitCard.Holder ||
        !preparedObject.Payment.DebitCard.ExpirationDate ||
        !preparedObject.Payment.DebitCard.SecurityCode ||
        !preparedObject.Payment.DebitCard.Brand){
        throw "CardNumber, Holder, ExpirationDate, SecurityCode and Brand are required";
    }

    return true;
};

module.exports = debitCardSimplePaymentValidation;