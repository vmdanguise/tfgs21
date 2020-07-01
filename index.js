//ayuda para el enrutador
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var connection = require('./conexion/conexion.js')
var http = require('http').createServer(app);
var io = require('socket.io')(http);


var consultaPersonalizada = require('./route_models/consultaPersonalizada.js');
const hbs = require('express-hbs');
const jwt = require('jsonwebtoken');
const config = require('./configs/config');
const rutasConToken = express.Router();
var EmailCtrl = require('./controllers/mailer.js');
var PORT = process.env.PORT || 8000;
var URL = 'http://localhost:';

/*app.use(function (req, res, next) {
  console.log('Time rquest:', Date.now(),  req.json());
  next();
});
*/
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('llave', config.llave);

app.engine('hbs', hbs.express4({
  defaultView: 'default',
  layoutsDir: __dirname + '/views/pages/',
  partialsDir: __dirname + '/views/partials/'

}));
app.set('views', (__dirname, 'views'));
app.set('view engine', 'hbs');

rutasConToken.use((req, res, next) => {
  const token = req.headers['access-token'] || req.query.token || req.body.token;

  if (token) {
    jwt.verify(token, app.get('llave'), (err, decoded) => {
      if (err) {
        return res.json({ mensaje: 'Token inválida' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: 'Token no proveída.'
    });
  }
});

// espacio para agregar routing    


 var alarmas = require('./route_models/alarmas.js'); 
 app.use('/alarmas', rutasConToken, alarmas);
 var asistencia = require('./route_models/asistencia.js'); 
 app.use('/asistencia', rutasConToken, asistencia);
 var certificados = require('./route_models/certificados.js'); 
 app.use('/certificados', rutasConToken, certificados);
 var clases = require('./route_models/clases.js'); 
 app.use('/clases', rutasConToken, clases);
 var ejerciciointeligente = require('./route_models/ejerciciointeligente.js'); 
 app.use('/ejerciciointeligente', rutasConToken, ejerciciointeligente);
 var ejercicios_en_clase = require('./route_models/ejercicios_en_clase.js'); 
 app.use('/ejercicios_en_clase', rutasConToken, ejercicios_en_clase);
 var pagos = require('./route_models/pagos.js'); 
 app.use('/pagos', rutasConToken, pagos);
 var usuarios = require('./route_models/usuarios.js'); 
 app.use('/usuarios', rutasConToken, usuarios);

//no tocar para abajo
app.use('/consultas', rutasConToken, consultaPersonalizada);

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {

  res.render('login', { layout: "default" });
})


// Home page route.
app.post('/menu', function (req, res) {
  res.render('menu', { layout: "default", token: req.query.token });
})

// Home page route.
app.get('/menu', function (req, res) {
  res.render('menu', { layout: "default", token: req.query.token });
})




app.post('/autenticar', (req, res) => {
  function genToken(callback) {
    const payload = {
      check: true
    };
    const token = jwt.sign(payload, app.get('llave'), {
      expiresIn: 1440
    });
    callback(token);
  }; 
 
  if (req.body.usuario == 'usuario' && req.body.contrasena == '1234'){
 
    genToken(function renderizarDefault(valor) {
      res.render('menuAdmin', { layout: "default", token: valor });
    });
  }
  else{
    sql = 'SELECT * from pilates_virtual_class.usuarios where idUsuarios = "' + req.body.usuario + '" and clave = "' + req.body.contrasena + '"';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error', { layout: "default", erroresporparametro: 'base de datos:' + err });
        return null;
      }
      Object.keys(result).forEach(function (key) {
        var row = result[key];
        const payload = {
          check: true
        };  
        genToken(function renderizar(valor) {
          if (row.rol == 'SuperAdmin') { res.render('menuSuperAdmin', { layout: "default", token: valor }); }
          else if (row.rol == 'Admin') { res.render('menuAdmin', { layout: "default", token: valor }); }
          else if (row.rol == 'normal') { res.render('menu', { layout: "default", token: valor }); }
        });
      })
      res.render('error', { layout: "default", erroresporparametro: "Usuario o contraseña incorrectos" });
    });  
  }
});

app.post('/autenticar2Factor', (req, res) => {
  sql = 'SELECT * from pilates_virtual_class.usuarios where idUsuarios = "' + req.body.usuario + '" and clave = "' + req.body.contrasena + '"';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error', { layout: "default", erroresporparametro: err });
      return null;
    }
    Object.keys(result).forEach(function (key) {
      var row = result[key];
      const payload = {
        check: true
      };
      function genToken(callback) {
        const token = jwt.sign(payload, app.get('llave'), {
          expiresIn: 1440
        });
        callback(token);
      };
      genToken(function sendMail(valor) {
        if (row.rol == 'SuperAdmin') { EmailCtrl.sendEmail("https://" + req.hostname + ":" + PORT + '/menuSuperAdmin?token=' + valor, req.body.usuario); }
        else if (row.rol == 'Admin') { EmailCtrl.sendEmail("https://" + req.hostname + ":" + PORT + '/menuAdmin?token=' + valor, req.body.usuario); }
        else if (row.rol == 'normal') {
          EmailCtrl.sendEmail("https://" + req.hostname + ":" + PORT + '/menu?token=' + valor, req.body.usuario);
        }
        res.status(200).send("Acceda a su mail para ingresar....");
      });
    })
    res.render('error', { layout: "default", erroresporparametro: "Usuario o contraseña incorrectos" });
  });
});


// error para recurso no actualiazado
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //  next(err);
  res.render('error', { erroresporparametro: err });
});



//app.listen(PORT);

http.listen(PORT);

//socket IO Video Call
io.on('connection', function (socket) {
  socket.on('stream', function (image) {
      socket.broadcast.emit('stream', image);
  });
  socket.on('stream2', function (image) {
      socket.broadcast.emit('stream2', image);
});
});




// aca termina la video call
console.log("Server Corriendo: " + URL + PORT + "/");

module.exports = app;
