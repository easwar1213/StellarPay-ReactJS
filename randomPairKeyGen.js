
var StellarSdk = require('stellar-sdk');
console.log(StellarSdk);

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
