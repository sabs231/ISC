var express = require('express');
var app = express();

app.configure(function () {
	//app.set('view engine', 'jade');
	//app.set('views', __dirname + '/views');
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.static(__dirname + '/views'));
	app.use('/scripts', express.static(__dirname + '/scripts'));
	app.use('/css', express.static(__dirname + '/css'));
	app.use('/img', express.static(__dirname + '/img'));
	app.use('/fonts', express.static(__dirname + '/fonts'));
	app.use(app.router);
});

app.get("/", function(request, response){
	//response.render("index", { message : "THIS IS ISC!", pageTitle: "Ingeniero en Sistemas Computacionales"});
	response.sendfile('index.html');
});

app.listen(8888);

