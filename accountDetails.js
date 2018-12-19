
var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

var publickey="GAO664ZWEJMJRUWFDZ4UROTEMLOGPURDCIVBTWO4NLZVSFALF2VYMLBJ";

server.accounts()
  .accountId(publickey)
  .call()
  .then(function (accountResult) {
    console.log(accountResult);
  })
  .catch(function (err) {
    console.error(err);
  })
