
var request = require('request');
var publickey = "GBNOAZUDKVMGRJEQYHEOEPQ4QZFVBPTDCT253EWWOGG2XYICK5ZBPVCJ";

request.get({
    url: 'https://friendbot.stellar.org',
    qs: { addr: publickey },
    json: true
  }, function(error, response, body) {
    if (error || response.statusCode !== 200) {
      console.error('ERROR!', error || body);
    }
    else {
      console.log('Initial balance 10000 XLM loaded to your account)\n', body);
    }
  });