exports.index = function(request, response) {
	response.render('index.html',  {title: 'ISC'});
}

exports.locations = function(request, response) {
	response.render('locations.html');
}
