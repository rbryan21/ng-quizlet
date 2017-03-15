var user = process.env.USER;
var dbPass = process.env.PASSWORD;

// Setting local env in powershell
// $env:key="password"

// Setting local env in terminal
// export KEY='password'

module.exports = {
    database: 'mongodb://' + user + ':' + dbPass + '@ds131320.mlab.com:31320/quizlet-ripoff',
    secret: 'yoursecret'
}