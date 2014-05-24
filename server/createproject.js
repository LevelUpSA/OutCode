var mongo = require('./mongoController');
var MongoController = require('./mongoController');


function project_create(request, response) {

	mongo.add_document('users', request.body, success, error);
	console.log(request.body);
	response.send('Project Added');
};

function success(message) {

}

function error(error_message) {

}

module.exports.project_create= project_create