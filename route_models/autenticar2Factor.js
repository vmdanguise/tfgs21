
let express = require("express");
let router = express.Router();
const stringify = require('csv-stringify');
var connection = require("./../conexion/conexion.js")
const jwt = require("jsonwebtoken");
const config = require("./../configs/config");
//app.set("llave", config.llave);

router.post("/autenticar2Factor", (req, res) => {
    sql = "SELECT u.rol, (select fecha  - now() fecha from pagos	where idpagos = (select max(p.idpagos) from pagos p where p.idalumno = u.idusuarios)) pago, " +
          " (select max(fechavencimiento)  - now() certificado from certificados c where c.idalumno = u.idusuarios) certificado " +
          " from public.usuarios u where u.idusuarios = '" + req.body.usuario + "' and u.clave = '" + req.body.contrasena + "'";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error", { layout: 'default', erroresporparametro: err });
        return null;
      }
      Object.keys(result.rows).forEach(function (key) {
        var row = result.rows[key];
        const payload = {
          check: true
        };
        function genToken(callback) {
          const token = jwt.sign(payload,config.llave, {
            expiresIn: 1440
          });
          callback(token);
        };
        genToken(function sendMail(valor) {
          if (row.rol == "SuperAdmin") { EmailCtrl.sendEmail('https://' + req.hostname + ':' + PORT + "/menuSuperAdmin?token=" + valor, req.body.usuario); }
          else if (row.rol == "Admin") { EmailCtrl.sendEmail('https://' + req.hostname + ':' + PORT + "/menuAdmin?token=" + valor, req.body.usuario); }
          else if (row.rol == "normal") {
            EmailCtrl.sendEmail('https://' + req.hostname + ':' + PORT + "/menu?token=" + valor, req.body.usuario);
          }
          res.status(200).send('Acceda a su mail para ingresar....');
        });
      })
      res.render("error", { layout: 'default', erroresporparametro: 'Usuario o contraseña incorrectos' });
    });
  });
  module.exports = router;
