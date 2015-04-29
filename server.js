var express = require("express"),
port = process.env.PORT || 1337,
http = require("http"),
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

app.use(express.urlencoded());
app.use(express.bodyParser());
app.post("/jsoncomment", function (req, res) {
  // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  console.log(newToDo);
  //toDos.push(newToDo);
  // отправляем простой объект
  res.json({"message":"Вы разместили данные на сервере!"});
});




setInterval(function () {
	if (globalVarLast != globalVar && globalVar != "NULL")
	{
		globalVarLast = globalVar;
		//writeFile('comments.txt', globalVarLast, function(err) {
  		//if (err) console.log(err);
		//														});
		console.log(globalVarLast);
	}
	//sleep.sleep(10); //sleep for n seconds
	console.log('Loop for end');
  }, 5000);