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

app.use(express.urlencoded());
app.post("/todos", function (req, res) {
  // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  // отправляем простой объект
  res.json({"message":"Вы разместили данные на сервере!"});
});