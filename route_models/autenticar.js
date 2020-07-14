let express = require("express");
let router = express.Router();
var mysql = require("mysql");
const stringify = require('csv-stringify');
let usuarios_c = require("./../controllers/usuarios_c");
var connection = require("./../conexion/conexion.js");
var bodyParser = require("body-parser");
var app = express();
var mysql = require("mysql");
var captcha = require("./captcha");
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const jwt = require("jsonwebtoken");
const config = require("./../configs/config");

router.post("/", function (req, res, next) {
    
   // captcha(req, res); 

    function genToken(callback) {
      const payload = {
        check: true
      };
      const token = jwt.sign(payload, config.llave, {
        expiresIn: 1440
      });
      callback(token);
    };
  
    if (req.body.usuario == "usuario" && req.body.contrasena == "1234") {
  
      genToken(function renderizarDefault(valor) {
        res.render("menuAdmin", { layout: 'default', token: valor ,  usuario: 'usuario' });
      });
    }
    else if (req.body.usuario == "profesor" && req.body.contrasena == "1234") {
  
      genToken(function renderizarDefault(valor) {
        res.render("menuSuperAdmin", { layout: 'default', token: valor ,  usuario: 'profesor'});
      });
    } else if (req.body.usuario == "alumno" && req.body.contrasena == "1234") {
  
      genToken(function renderizarDefault(valor) {
        res.render("menu", { layout: 'default', token: valor , usuario: 'alumno'});
      });
    }
    else {
      sql = "SELECT idusuarios, rol, (select extract(days from (max(fecha) - now())) + 30 from pagos	where idalumno = idusuarios) pago, " +
      " (select extract(days from (max(fechavencimiento)  - now()))  from certificados c where c.idalumno = idusuarios) certificado " +
      " from public.usuarios where idusuarios = '" + req.body.usuario + "' and clave = '" + req.body.contrasena + "'";
      connection.query(sql, function (err, result, rows) {
        if (err) {
          res.render("error", { layout: 'default', erroresporparametro: "base de datos:" + err });
          return null;
        }
        Object.keys(result.rows).forEach(function (key) {
          var row = result.rows[key];
          const payload = {
            check: true
          };
          genToken(function renderizar(valor) {
            if (row.rol == "SuperAdmin") { 
              res.render("menuSuperAdmin", { layout: 'default', token: valor , pago: row.pago, certificado: row.certificado, usuario: row.idusuarios  }); }
            else if (row.rol == "Admin") { 
              res.render("menuAdmin", { layout: 'default', token: valor ,  pago: row.pago, certificado: row.certificado, usuario: row.idusuarios  }); }
            else if (row.rol == "normal") { 
              res.render("menu", { layout: 'default', token: valor, pago: row.pago, certificado: row.certificado, usuario: row.idusuarios }); }
          });
        })
        res.render("error", { layout: 'default', erroresporparametro: 'Usuario o contraseña incorrectos' });
      });
    }
  });
  
  module.exports = router;
