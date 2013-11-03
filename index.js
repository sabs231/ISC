var express = require('express');
var routes = require('./routes');
var app = express();

app.configure(function () {
	//app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.set("view options",  {layout: false});
	app.engine('html', require('ejs').renderFile);
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.cookieParser());
//	app.use('/views', express.static(__dirname + '/views'));
	app.use('/scripts', express.static(__dirname + '/scripts'));
	app.use('/css', express.static(__dirname + '/css'));
	app.use('/img', express.static(__dirname + '/img'));
	app.use('/fonts', express.static(__dirname + '/fonts'));
	app.use('/video', express.static(__dirname + '/video'));
	app.use(app.router);
});

app.get('/', routes.index);
app.get('/locations', routes.locations);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/studyplan', routes.studyplan);

app.listen(8888);
