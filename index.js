
var StellarSdk = require('stellar-sdk');
var request = require('request');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

//console.log(StellarSdk);
// create a completely new and unique pair of keys
// see more about KeyPair objects: https://stellar.github.io/js-stellar-sdk/Keypair.html

//Random Pair key Generation
var pair = StellarSdk.Keypair.random();
pair.secret();
// SAV76USXIJOBMEQXPANUOQM6F5LIOTLPDIDVRJBFFE2MDJXG24TAPUU7
pair.publicKey();
// GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB
console.error(pair.secret());
console.error(pair.publicKey());

//Account Details
server.accounts()
  .accountId("GDFTFJRN3BWKUCSPT5HAQB3VRKHLIWIINFXWVKKT7CY374NSLLGJ2HVS")
  .call()
  .then(function (accountResult) {
    console.log(accountResult);
  })
  .catch(function (err) {
    console.error(err);
  })

//
// request.get({
//   url: 'https://friendbot.stellar.org',
//   qs: { addr: pair.publicKey() },
//   json: true
// }, function(error, response, body) {
//   if (error || response.statusCode !== 200) {
//     console.error('ERROR!', error || body);
//   }
//   else {
//     console.log('SUCCESS! You have a new account :)\n', body);
//   }
// });

var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
    // the JS SDK uses promises for most actions, such as retrieving an account
    server.loadAccount('GDFTFJRN3BWKUCSPT5HAQB3VRKHLIWIINFXWVKKT7CY374NSLLGJ2HVS').then(function (account) {
      console.log('Balances for account: ' + pair.publicKey());
      account.balances.forEach(function (balance) {
        console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
      });
    }).catch(function (err) {
      console.error(err);
    });

// var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
// var accountId = 'GBVXXONZ6H5M57XLZPNAOYTRZZ7KDQGBQEQEQPRDUK5P6Y5DDLDZRYG5';

// server.transactions()
//     .forAccount(accountId)
//     .call()
//     .then(function (page) {
//         console.log('Page 1: ');
//         console.log(page.records);
//         return page.next();
//     })
//     .then(function (page) {
//         console.log('Page 2: ');
//         console.log(page.records);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

