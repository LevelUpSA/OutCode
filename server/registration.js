var mongo = require('mongodb');

function register_user(request, response) {


	console.log(request.body);
};


module.exports.register_user = register_user