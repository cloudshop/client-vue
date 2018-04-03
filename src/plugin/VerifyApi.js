var UaaApi = require('uaa_api');
console.log(UaaApi);
var api = new UaaApi.AccountresourceApi();

// console.log(api) 
var key = "key_example"; // {String} key

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
// api.changePasswordUsingPOST(key, function(error, data, response){
//   console.log(error, data, response)
// });
api.isAuthenticatedUsingGET(callback);
