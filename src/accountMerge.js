var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();
var rootKeypair = StellarSdk.Keypair.fromSecret("SDWRSXJ7D7DTHYSQH5YOU7A45PWFCEMZ6O256UG2O45G72R3R4MAJTU2");
var publickey="GAO664ZWEJMJRUWFDZ4UROTEMLOGPURDCIVBTWO4NLZVSFALF2VYMLBJ";
var account = new StellarSdk.Account(publickey, "5108807764017152");
var secondaryAddress = "GBNOAZUDKVMGRJEQYHEOEPQ4QZFVBPTDCT253EWWOGG2XYICK5ZBPVCJ";

var transaction = new StellarSdk.TransactionBuilder(account)
  .addOperation(StellarSdk.Operation.setOptions({
    signer: {
      ed25519PublicKey: secondaryAddress,
      weight: 1
    }
  }))
  .addOperation(StellarSdk.Operation.setOptions({
    masterWeight: 1, // set master key weight
    lowThreshold: 0,
    medThreshold: 2, // a payment is medium threshold
    highThreshold: 2 // make sure to have enough weight to add up to the high threshold!
  }))
  .build();

transaction.sign(rootKeypair); // only need to sign with the root signer as the 2nd signer won't be added to the account till after this transaction completes

server.submitTransaction(transaction).then(function(result) {
    console.log('Your account merged successfully:', result);
  })
  .catch(function(error) {
    console.error('Something went wrong!', error);
  });

  