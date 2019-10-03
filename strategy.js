// const Auth0Strategy = require('passport-auth0');
// const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

// module.exports = new Auth0Strategy({
//    domain:       DOMAIN,
//    clientID:     CLIENT_ID,
//    clientSecret: CLIENT_SECRET,
//    callbackURL:  '/login',
//    scope: 'openid email profile'
//   },
//   function(accessToken, refreshToken, extraParams, profile, done) {
//     // accessToken is the token to call Auth0 API (not needed in the most cases)
//     // extraParams.id_token has the JSON Web Token
//     // profile has all the information from the user
//     return done(null, profile);
//   }
// );


const config = require('./config');
const Auth0Strategy = require('passport-auth0');

module.exports = new Auth0Strategy(
    {
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: '/login'
    },
function(accessToken, refreshToken, extraParams, profile, done) {

    console.log(1);

    //the login request uses this strategy to hit auth0 and it gives the clientID and secret.
    return done(null, profile);
    }
);
