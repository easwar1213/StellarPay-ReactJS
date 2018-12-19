var StellarSdk = require('stellar-sdk');
StellarSdk.Network.useTestNetwork();
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
var rootKeypair = StellarSdk.Keypair.fromSecret("SARLA5XHRWJNTIOXYRP4C76CO3FT4KWKN6YFRDD4CFUD2G6X7C3U2OMC");
var secondKeypair = StellarSdk.Keypair.fromSecret("SCB5WLPPTVJ3UGNT6VW3SN3ZKRSQD67INVJ6NG4PKT7BUXS3JROCQRKL");
var publickey="GBYXFX7KDDS3MPS44M47OL5RDNP23A22BHCKARXLRFGIZUXQ4UX57C6D";
var account = new StellarSdk.Account(publickey, "5107149906640898");
var destinationId = 'GA5NUWXI2E5S6DFVOUUYSHEZU7L62ZDNAWC24ACM25ZRWCFQ6WZWOK7K';


var transaction = new StellarSdk.TransactionBuilder(account)
    .addOperation(StellarSdk.Operation.payment({
        destination: destinationId,
        asset: StellarSdk.Asset.native(),
        amount: "2000" // 2000 XLM
    }))
    .build();

// now we need to sign the transaction with both the root and the secondaryAddress
transaction.sign(rootKeypair);
transaction.sign(secondKeypair);

server.submitTransaction(transaction).then(function(result) {
  console.log('Res successfully:', result);
})
.catch(function(error) {
  console.error('Something went wrong!', error);
});