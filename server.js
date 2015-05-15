var express = require("express"),
port = process.env.PORT || 1337, //1337 - ажур //3000 - у себя
http = require("http"),
counts = {},
app = express();

// настроим статическую файловую папку для маршрута по умолчанию
app.use(express.static(__dirname + "/client"));
// создадим HTTP-сервер на базе Express
http.createServer(app).listen(port);
// настроим маршруты
app.get("/hello", function (req, res) {
res.send("Hello, World!");
});
app.get("/goodbye", function (req, res) {
res.send("Goodbye, World!");
});

/* app.use(express.urlencoded());
app.post("/todos", function (req, res) {
  // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  // отправляем простой объект
  res.json({"message":"Вы разместили данные на сервере!"});
}); */
var globalVar = "NULL";
globalVar = "NULL";
var globalVarLast = "NULL";
//var sleep = require('sleep');
//var writeFile = require('write');
var coolObject = "{ 'name': 'Вася', 'comment': 'hello'}";

app.get("/somewayjson", function (req, res) {
// res.json возвращает объект coolObject целиком в виде файла JSON
res.json(coolObject);
//console.log(req);
//console.log(res);
});
//
//app.use(express.urlencoded());
//app.use(express.bodyParser());

//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({
//  extended:true
//}));
//
//app.use(bodyParser.json());

app.use(express.urlencoded());
app.use(express.json());

app.post("/jsoncomment", function (req, res) {
  // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  console.log(newToDo);
  //toDos.push(newToDo);
  // отправляем простой объект
  res.json({"message":"Вы разместили данные на сервере!"});
});


//____________________________________________

var configJson = require('./credentials.json');

var Twitter = require('twitter');
var client = new Twitter(configJson);

client.post('statuses/update', { status: 'I Love Twitter' }, function (error, tweet, response) {
    if (error) throw error;
    console.log(tweet);  // Tweet body. 
    console.log(response);  // Raw response object. 
});





// ââîäèì ñ÷åò÷èê êàæäûå 3 ñåêóíäû
setInterval(function () {
console.log("awesome: " + counts.awesome);
}, 3000);

//
//setInterval(function () {
//	if (globalVarLast != globalVar && globalVar != "NULL")
//	{
//		globalVarLast = globalVar;
//		//writeFile('comments.txt', globalVarLast, function(err) {
//  		//if (err) console.log(err);
//		//														});
//		console.log(globalVarLast);
//	}
//	//sleep.sleep(10); //sleep for n seconds
//	console.log('Loop for end');
//  }, 5000);