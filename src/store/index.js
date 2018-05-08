import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: { 
        user: {
            userName:'',
            loggedInStatus: false,
            recommend:'',
            iphone:'',
            authCode:'',
            	accessToken: {}
        }
    }, 
    getters: {
    		isAuthed: (state) => {
	            console.log(state.user);
	    		if (state.user.accessToken !== {}) {
		    		return true;
		    }
	    		return false;
	    	},
	    	token: (state) => {
	            console.log(state.user);
	    		if (state.user.accessToken !== {}) {
	    		   return state.user.accessToken.token.access_token;
	    	    }
	    	},
	    	bearToken: (state) => {
	            console.log(state.user);
	    		if (state.user.accessToken !== {}) {
	    		   return 'Bearer '.concat(state.user.accessToken.token.access_token);
            }
            return ''
	    	},
	    	tokenHeader: (state) => {
	            console.log(state.user);
	    		if (state.user.accessToken !== {}) {
	    		   return { headers: { Authorization: 'Bearer '.concat(state.user.accessToken.token.access_token) } }
	    	    }
	    	},
	    	recommend: (state) => {
	            console.log(state.user);
          return state.user.recommend
        },
        authCode: (state) => {
          return state.user.authCode
        },
        iphone: (state) => {
          return state.user.iphone
	    	},
    },

    mutations: { 
        addWebToken: function(state, accessToken){
            state.user.accessToken = accessToken;
            loggedInStatus = true;
            this.$axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(state.user.accessToken.token.access_token);
        },
        removeWebToken: function(state){
            state.user.accessToken = {};
            loggedInStatus = false;
            this.$axios.defaults.headers.common['Authorization'] = '';
            delete axios.defaults.headers.common["Authorization"];
        },
        recommend: function(state, recommend){
           state.user.recommend = recommend;
        },
        iphone: function(state, iphone){
           state.user.iphone = iphone;
        },
        authCode: function(state, authCode){
           state.user.authCode = authCode;
        },
    },
    actions: {
        login: function(context, userInput){
            const credentials = {
                    client: {
                      id: 'web_app',
                      secret: 'w1eb_app'
                    },
                    auth: {
                        tokenHost: 'http://app.grjf365.com:9080/api',
                        tokenPath: '/auth/login/app'
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
	        username: userInput.username,
	        password: userInput.password,
	        registrationID: userInput.registrationID
	      }

      // Promises
      // Save the access token
      oauth2.ownerPassword.getToken(tokenConfig)
        .then((result) => {
          const accessToken = oauth2.accessToken.create(result)
                // store the token in global variable ??
          context.commit('addWebToken', accessToken); 
          
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
          // your logout functionality
          context.commit('removeWebToken');
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
        }
    }
});