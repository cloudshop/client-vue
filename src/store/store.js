/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recommend: '',
        authCode: '',
        user: {},
        token: null,
        userphone: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null
        },
        [types.VERIFY_CODE]: (state, data) => {
            state.authCode = data;
        },
        [types.INVITOR]: (state, data) => {
            state.recommend = data;
        },
        [types.USERPHONE]: (state, data) => {
            state.userphone = data;
        }
    },

    getters: {
        isAuthed: (state) => {
            console.log(state.token)
            if (state.token !== null && typeof state.token.token.access_token !== "undefined") {
                return true;
            }
            return false;
        },
        token: (state) => {
            if (state.token !== null && typeof state.token.token.access_token !== "undefined") {
                return state.token.token.access_token;
            }
        },
        bearToken: (state) => {
            console.log(state.token)
            if (state.token !== null && typeof state.token.token.access_token !== "undefined") {
                return 'Bearer '.concat(state.token.token.access_token);
            }
            return null
        },
        recommend: (state) => {
            return state.recommend
        },
        authCode: (state) => {
            return state.authCode
        },
        iphone: (state) => {
            return state.userphone
        },
    },
    actions: {
        login: function (context, userInput) {
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
                    context.commit(types.LOGIN, accessToken);

                    var val = {
                        "func": "closeCurrent",
                        "param": {
                            'finallyIndex': '1',
                            'refreshAll': true
                        },
                    };
                    var u = navigator.userAgent;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
                    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
                    if (isiOS) {
                        window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
                    } else if (isAndroid) {
                        window.androidObject.JSCallAndroid(JSON.stringify(val));
                    }
                    return true;
                })
                .catch((error) => {
                    if (error.response.status === 500) {
                        alert('服务器繁忙，请耐心等待')
                    }
                    if (error.response.status === 400) {
                        alert('用户名密码错误')
                    }
                    console.log('Access Token error', error.message);
                })
        },

        refresh: function (context) {
            const EXPIRATION_WINDOW_IN_SECONDS = 300;

            const {
                token
            } = accessToken;
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

        logout: function (context) {
            // your logout functionality
            context.commit(types.LOGOUT);
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
})