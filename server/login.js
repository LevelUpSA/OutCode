var mongo = require('./mongoController');

function login_user(request, response) {

	mongo.find_document('users', request.body, function(data) {
		request.session.generate(function(err) {
			response.send(err);
		});
	}, function(error) {
		response.send(error);
	});
	//console.log(request.body);
	response.send('Thanx for login');
};

module.exports.login_user = login_user