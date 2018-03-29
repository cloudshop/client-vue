function SmsApi(){
  var SmsApi = require('smsapiappsss');

  var api = new SmsApi.MessageresourceApi()
  
  var messageDTO = new SmsApi.MessageDTO(); // {MessageDTO} messageDTO
  
  
  var callback = function(error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ' + data);
      }
    };
}



export default   api.createMessageUsingPOST(messageDTO, callback);




