import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'


export default new Vuex.Store({
    state: { 
        user: {
            userName:'',
            loggedInStatus: true,
            	accessToken: {}
        }
    }, 
    mutations: { 
        addWebToken: function(state, accessToken){
            state.user.accessToken = accessToken;
        },
        removeWebToken: function(state){
            state.user.accessToken = {};
        }
    },
    actions: {
        login: function(context, userInput){
            const credentials = {
                    client: {
                      id: 'web_app',
                      secret: 'w1eb_app'
                    },
                    auth: {
                      tokenHost: 'https://localhost/api',
                      tokenPath: 'auth/login/app'
                    },
                    http: {
                      headers: {
                        Accept: 'application/json'
                      }
                    },
                    options: {
                      bodyFormat: 'json'
                    }
                  }

                  const oauth2 = require('simple-oauth2').create(credentials)

	      // Get the access token object.
	      const tokenConfig = {
	        username: userInput.PassName,
	        password: userInput.PassWord,
	        registrationID: userInput.registrationID
	      }

      // Promises
      // Save the access token
      oauth2.ownerPassword.getToken(tokenConfig)
        .then((result) => {
          const accessToken = oauth2.accessToken.create(result)
                // store the token in global variable ??
                  setCookie('login',1)
                context.commit('addWebToken', accessToken); 
          console.log('accessToken:' + accessToken)
          alert('accessToken:');
          
          var val={
            "func":"closeCurrent",
            "param":{'finallyIndex':'1','refreshAll':true},
          };
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
          if(isiOS){
             window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
          }else if(isAndroid){
             window.androidObject.JSCallAndroid(JSON.stringify(val));
          }
          return true;
        })
        .catch((error) => {
          if(error.response.status === 500){
            alert('服务器繁忙，请耐心等待')
          }
          if(error.response.status === 400){
            alert('用户名密码错误')
          }
          console.log('Access Token error', error.message);
          alert(error.message);
        })
        },
        refresh: function(context) {
        		const EXPIRATION_WINDOW_IN_SECONDS = 300;
        	 
        	const { token } = accessToken;
        	const expirationTimeInSeconds = token.expires_at.getTime() / 1000;
        	const expirationWindowStart = expirationTimeInSeconds - EXPIRATION_WINDOW_IN_SECONDS;
        	 
        	// If the start of the window has passed, refresh the token
        	const nowInSeconds = (new Date()).getTime() / 1000;
        	const shouldRefresh = nowInSeconds >= expirationWindowStart;
        	if (shouldRefresh) {
        	  // Callbacks
        	  accessToken.refresh((error, result) => {
        	    accessToken = result;
        	  })
        	 
        	  // Promises
        	  accessToken.refresh()
        	  .then((result) => {
        	    accessToken = result;
        	  });
        	}
        },
        logout: function(context){
         // Callbacks
         // Revoke only the access token
         accessToken.revoke('access_token', (error) => {
           // Session ended. But the refresh_token is still valid.
          
           // Revoke the refresh_token
           accessToken.revoke('refresh_token', (error) => {
             console.log('token revoked.');
           });
         });
          
         // Promises
         // Revoke only the access token
         accessToken.revoke('access_token')
           .then(() => {
             // Revoke the refresh token
             return accessToken.revoke('refresh_token');
           })
           .then(() => {
             console.log('Token revoked');
           })
           .catch((error) => {
             console.log('Error revoking token.', error.message);
           });
         // your logout functionality
         context.commit('removeWebToken');

        }
    }
});