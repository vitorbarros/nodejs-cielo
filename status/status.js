/**
 * @desc Classe que faz a verificação do status da transação da cielo
 * @constructor
 */
var StatusTransaction = function () {

};

/**
 * @desc Método que faz a tradução para retornar a mensagem de acordo com o código
 * @param status
 * @param returnCode
 * @returns {*}
 */
StatusTransaction.prototype.getStatusTransaction = function (status, returnCode) {

    status = parseInt(status);
    returnCode = returnCode.toString();

    var message = null;
    if (status !== 1 && status !== 2) {
        switch (returnCode) {

            case "01":
            case "02":
            case "04":
            case "05":
            case "06":
            case "15":
            case "39":
            case "41":
            case "43":
            case "51":
            case "53":
            case "55":
            case "57":
            case "59":
            case "60":
            case "61":
            case "62":
            case "63":
            case "64":
            case "65":
            case "67":
            case "70":
            case "74":
            case "75":
            case "91":
            case "97":
                message = "Transação não autorizada. Entre em contato com seu banco emissor.";
                break;
            case "03":
                message = "Transação não permitida. Estabelecimento inválido. Entre com contato com a Cielo.";
                break;
            case "08":
            case "52":
            case "54":
            case "80":
            case "90":
                message = "Transação não autorizada. Dados do cartão incorretos. Reveja os dados e informe novamente.";
                break;
            case "12":
            case "14":
                message = "Não foi possível processar a transação. reveja os dados informados e tente novamente. Se o erro persistir, entre em contato com seu banco emissor.";
                break;
            case "13":
                message = "Transação não autorizada. Valor inválido. Refazer a transação confirmando os dados informados. Persistindo o erro, entrar em contato com a loja.";
                break;
            case "19":
            case "25":
            case "72":
            case "85":
            case "86":
            case "92":
            case "93":
            case "96":
            case "98":
            case "99":
            case "999":
                message = "Não foi possível processar a transação. Refaça a transação ou tente novamente mais tarde. Se o erro persistir entre em contato com a loja.";
                break;
            case "58":
                message = "Transação não permitida. Opção de pagamento inválida. Reveja se a opção de pagamento escolhida está habilitada no cadastro";
                break;
            case "78":
                message = "Transação não autorizada. Entre em contato com seu banco emissor e solicite o desbloqueio do cartão.";
                break;
            case "82":
            case "83":
            case "89":
                message = "Transação não autorizada. Refazer a transação confirmando os dados. Se o erro persistir, entre em contato com o seu banco emissor.";
                break;
            default:
                message = "Transação não autorizada. Refazer a transação confirmando os dados. Se o erro persistir, entre em contato com o seu banco emissor.";
                break;
        }
        return message;
    } else {
        return message;
    }
};

module.exports = StatusTransaction;