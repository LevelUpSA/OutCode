var mongo = require('./mongoController');

function login_user(request, response) {

	mongo.find_document('users', request.body, function(data) {
		request.session.generate(function(err) {
			response.send(err);
		});
	}, error);
	//console.log(request.body);
	response.send('Thanx for login');
};

function success(message) {

}

function error(error_message) {

}

module.exports.login_user = login_user