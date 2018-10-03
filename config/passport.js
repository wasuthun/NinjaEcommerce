const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const Account = require('../routes/accountToDataBase')
const accout = new Account()
module.exports = function (passport) {

    passport.use(new LocalStrategy(async function (username, password, done) {
        try {
            const result = await accout.login({ username: username, password: password })
            console.log(result)
            if (result.return_code = '200') {
                return done(null, result)
            } else {
                return done(null, false, { message: 'Wrong Username or Password' })
            }

        } catch (error) {
            return error.data
        }
    }))

    passport.serializeUser(function (user, done) {

        console.log('serialize ' + JSON.stringify(user))
        console.log(user)
        console.log(user.account.username)
        done(null, user.account.username)
    });

    passport.deserializeUser(async function (user, done) {
        console.log("Eiei:"+user)
        const result = await accout.getAccountBy(user)
        console.log('user:', result)
        done(null, result)
    });

}