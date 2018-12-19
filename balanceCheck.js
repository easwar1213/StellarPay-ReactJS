
var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

var publickey = "GBYXFX7KDDS3MPS44M47OL5RDNP23A22BHCKARXLRFGIZUXQ4UX57C6D";

// the JS SDK uses promises for most actions, such as retrieving an account
server.loadAccount(publickey).then(function (account) {
    console.log('Balances for account: ' + publickey);
    account.balances.forEach(function (balance) {
        console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
    });
}).catch(function (err) {
    console.error(err);
});

