//ayuda para el enrutador
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mysql = require("mysql");
var connection = require("./conexion/conexion.js")
var http = require("http").createServer(app);
var io = require("socket.io")(http);


var consultaPersonalizada = require("./route_models/consultaPersonalizada.js");
const hbs = require("express-hbs");
const jwt = require("jsonwebtoken");
const config = require("./configs/config");
const rutasConToken = express.Router();
var EmailCtrl = require("./controllers/mailer.js");
var PORT = process.env.PORT || 8000;
var URL = "http://localhost:";

/*app.use(function (req, res, next) {
  console.log("Time rquest:", Date.now(),  req.json());
  next();
});
*/
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set("llave", config.llave);

app.engine("hbs", hbs.express4({
  defaultView: "default",
  layoutsDir: __dirname + "/views/pages/",
  partialsDir: __dirname + "/views/partials/"

}));
app.set("views", (__dirname, "views"));
app.set("view engine", "hbs");

rutasConToken.use((req, res, next) => {
  const token = req.headers["access-token"] || req.query.token || req.body.token;

  if (token) {
    jwt.verify(token, app.get("llave"), (err, decoded) => {
      if (err) {
        return res.json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: "Token no proveída."
    });
  }
});

// espacio para agregar routing    


var alarmas = require("./route_models/alarmas.js");
app.use("/alarmas", rutasConToken, alarmas);
var asistencia = require("./route_models/asistencia.js");
app.use("/asistencia", rutasConToken, asistencia);
var certificados = require("./route_models/certificados.js");
app.use("/certificados", rutasConToken, certificados);
var clases = require("./route_models/clases.js");
app.use("/clases", rutasConToken, clases);
var ejerciciointeligente = require("./route_models/ejerciciointeligente.js");
app.use("/ejerciciointeligente", rutasConToken, ejerciciointeligente);
var ejercicios_en_clase = require("./route_models/ejercicios_en_clase.js");
app.use("/ejercicios_en_clase", rutasConToken, ejercicios_en_clase);
var pagos = require("./route_models/pagos.js");
app.use("/pagos", rutasConToken, pagos);
var usuarios = require("./route_models/usuarios.js");
app.use("/usuarios", rutasConToken, usuarios);
var autenticar = require("./route_models/autenticar.js");
app.use("/autenticar", autenticar);
var autenticar2Factor = require("./route_models/autenticar2Factor.js");
app.use("/autenticar2Factor", autenticar2Factor);




//no tocar para abajo
app.use("/consultas", rutasConToken, consultaPersonalizada);

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {

  res.render("login", { layout: 'default' });
})


// Home page route.
app.post("/menu", function (req, res) {
  res.render("menu", { layout: 'default', token: req.query.token });
})

// Home page route.
app.get("/menu", function (req, res) {
  res.render("menu", { layout: 'default', token: req.query.token });
})



// error para recurso no actualiazado
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  //  next(err);
  res.render("error", { erroresporparametro: err });
});



//app.listen(PORT);

http.listen(PORT);

//socket IO Video Call
io.on("connection", function (socket) {
  socket.on("alumnoUsuario", function (image) {
    socket.broadcast.emit("alumnoUsuario", image);
  });
  socket.on("chat", function (data) {
    socket.broadcast.emit("chat", {message: data.message});
  });
  socket.on("audioMessage", function(msg) {
    io.emit("audioMessage", msg);
  });
});




// aca termina la video call
console.log('Server Corriendo: ' + URL + PORT + '/');

module.exports = app;
