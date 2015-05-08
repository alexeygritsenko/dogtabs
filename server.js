var express = require("express"),
port = process.env.PORT || 1337, //1337 - ажур //3000 - у себя
http = require("http"),
counts = {},
app = express();
var twitter = require('ntwitter');
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




//API ключи можно указать прямо в коде (чего, впрочм, делать не рекомендуется)
var twit = new twitter(configJson);

//twit.stream(
//  // первый параметр — строка
//  "statuses/filter",
//  // второй параметр — объект, содержащий массив со словами, к. мы ищем
//  { "track": "awesome"},
//  // третий параметр — обратный вызов, срабатывающий, когда поток создан
//function(stream) {
//  stream.on("data", function(tweet) {
//    console.log(tweet.text);
//  });
//  }
//);

twit.stream(
"statuses/filter",
{ "track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
function(stream) {
stream.on("data", function(tweet) {
if (tweet.indexOf("awesome") > -1) {
// ïðèðàùåíèå ñ÷åò÷èêà äëÿ ñëîâà awesome
counts.awesome = counts.awesome + 1;
}
});
}
);
// ââîäèì ñ÷åò÷èê êàæäûå 3 ñåêóíäû
setInterval(function () {
console.log("awesome: " + counts.awesome);
}, 3000);
//
//twit
//  .verifyCredentials(function (err, data) {
//    console.log(data);
//  })
//  .updateStatus('Test tweet from ntwitter/' + twitter.VERSION,
//    function (err, data) {
//      console.log(data);
//    }
//  );

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