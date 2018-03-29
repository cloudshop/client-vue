
  var VerifyApi = require('verify_api');

  var apiInstance = new VerifyApi.VerifyresourceApi();
  console.info(apiInstance);
  
  var phone = "18310802847"; // String | phone
  
  
  var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
    }
  };

  apiInstance.smsCodeUsingGET(phone,function(error,data,response){
    // console.log(11111)
    console.log(error,data,response)
  });  




