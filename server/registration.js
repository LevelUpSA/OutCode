var mongo = require('./mongoController');
var MongoController = require('./mongoController');


function register_user(request, response) {

	mongo.add_document('users', request.body, success, error);
	console.log(request.body);
	response.send('Thanx for Registering');
};

function success(message) {

}

function error(error_message) {

}

module.exports.register_user = register_user