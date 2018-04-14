# nodejs-cielo 1.0.1

Integração com a API de pagamento da CIELO 3.0

## Recursos

 - Criação de token de cartão de crédito para pagamento recorrente.
 - Pagamento com cartão de crédito.
 - Pagamento com cartão de débito.
 
 ## Instalação
 
 ```
npm install nodejs-cielo
```

## Arquivo de configuração

 - No diretório raiz da aplicação criar o arquivo de configuração das credenciais da API
 
  ```
sua-aplicacao/config/cielo.js
```

  ```js
/**
 * @desc Credenciais da CIELO
 * @constructor
 */
var Cielo = function () {
};

Cielo.prototype.credentials = function () {
return {
    baseUrl: 'cielo api url',
    MerchantId: 'your merchant id',
    MerchantKey: 'your mechant key',
    ssl: true
}
};

module.exports = Cielo;

```

## Exemplo

Pagamento simples com cartão de crédito

```js

var cielo = require('cielo');
var request = new cielo();

var config = require('./config/cielo');
var cred = new config();

request.setCredentials(cred.credentials());

var paymentObject = {
    MerchantOrderId: 1,
    Customer: {
        Name: 'Joao'
    },
    Payment: {
        Type: "CreditCard",
        Amount: 1000,
        Installments: 1,
        SoftDescriptor: "Your merchant name",
        Capture: true,
        CreditCard: {
            CardNumber: '0000000000000001',
            Holder: 'joao da silva',
            ExpirationDate: '07/2020',
            SecurityCode: 123,
            Brand: 'master',
            SaveCard: true // essa opção serve para gerar uma token do cartão para futuras compras
        }
    }
};

request.prepare('creditCardSimplePayment', paymentObject);
request.request(function (success, err) {
    if (err) {
        reject(err);
    } else {
        resolve(success);
    }
});

```

Pagamento com card token

```js

var cielo = require('cielo');
var request = new cielo();

var config = require('./config/cielo');
var cred = new config();

request.setCredentials(cred.credentials());

var paymentObject = {
    MerchantOrderId: 1,
    Customer: {
        Name: 'Joao'
    },
    Payment: {
        Type: "CreditCard",
        Amount: 1000,
        Installments: 1,
        SoftDescriptor: "Your merchant name",
        Capture: true,
        CreditCard: {
            CardToken: 'token do cartão salvo',
            SecurityCode: 123,
            Brand: 'master'
        }
    }
};

request.prepare('creditCardSimplePaymentWithCardToken', paymentObject);
request.request(function (success, err) {
    if (err) {
        reject(err);
    } else {
        resolve(success);
    }
});

```

Pagamento com cartão de débito

```js

var cielo = require('cielo');
var request = new cielo();

var config = require('./config/cielo');
var cred = new config();

request.setCredentials(cred.credentials());

var paymentObject = {
    MerchantOrderId: 1,
    Customer: {
        Name: 'Joao'
    },
    Payment: {
        Type: "DebitCard",
        Amount: 1000,
        Installments: 1,
        SoftDescriptor: "Your merchant name",
        Capture: true,
        CreditCard: {
            CardNumber: '0000000000000001',
            Holder: 'joao da silva',
            ExpirationDate: '07/2020',
            SecurityCode: 123,
            Brand: 'master'
        }
    }
};

request.prepare('debitCardSimplePayment', paymentObject);
request.request(function (success, err) {
    if (err) {
        reject(err);
    } else {
        resolve(success);
    }
});

```

## TODO

 - Transferência eletrônica
 - Boleto bancário
 - Finalização dos recursos de pagamento com cartão de crédito
 - Finalização dos recursos de pagamento com cartão de débito
 
## Documentação oficial da CIELO

https://developercielo.github.io/manual/cielo-ecommerce#meios-de-pagamento

## LICENSE

You can find a copy of this license in [LICENSE.md](LICENSE.md).
