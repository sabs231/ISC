exports.index = function(request, response) {
	response.render('index.html',  {title: 'ISC'});
}

exports.locations = function(request, response) {
	response.render('locations.html');
}

exports.about = function(request, response) {
	response.render('about.html');
}

exports.contact = function(request, response) {
	response.render('contact.html');
}

exports.studyplan = function(request, response) {
	response.render('studyplan.html');
}
