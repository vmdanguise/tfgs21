let express = require("express");
let router = express.Router();
var mysql = require("mysql");
const stringify = require('csv-stringify');
let usuarios_c = require("./../controllers/usuarios_c");
var connection = require("./../conexion/conexion.js")
// About page route.
router.get("/", function (req, res, next) {
  sql = "SELECT * from public.usuarios";
    connection.query(sql, function (err, result, rows) {
      if (err) {
     //   res.render("error",{layout:'default',erroresporparametro:err});
     res.render("usuarios", {layout:'default', usuarios: result,token: req.query.token });  
     return null;
      }
      res.render("usuarios", {layout:'default', usuarios: result,token: req.query.token });
    });
});
router.post("/update_usuarios", async function (req, res) {
  
  var tool = new  usuarios_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = "UPDATE public.usuarios SET idUsuarios='"+req.body.idUsuarios+"' ,apellido='"+req.body.apellido+"',nombre='"+req.body.nombre+"',fechanacimiento='"+req.body.fechanacimiento+"',clave='"+req.body.clave+"',rol='"+req.body.rol+"' WHERE idUsuarios='"+req.body.idUsuarios+"'"; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render("error",{layout:'default',erroresporparametro:err});
       return null;
     }
     sql = "SELECT * from public.usuarios";
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render("error",{layout:'default',erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result) );
     });
   })
 });
router.post("/insert_usuarios", function (req, res) {
  let sql = "INSERT INTO public.usuarios (idUsuarios ,apellido ,nombre ,fechanacimiento ,clave ,rol ) values ('"+req.body.idUsuarios+"' ,'" + req.body.apellido + "','" + req.body.nombre + "','" + req.body.fechanacimiento + "','" + req.body.clave + "','" + req.body.rol + "')";
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    sql = "SELECT * from public.usuarios";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error",{layout:'default',erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );
    });
  })
});
router.post("/delete_usuarios", function (req, res) {
  let sql = "DELETE from public.usuarios WHERE idUsuarios = '" + req.body.idUsuarios + "'";
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    sql = "SELECT * from public.usuarios";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error",{layout:'default',erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );

    });
  })
});
router.post("/select_usuarios", function (req, res) {
  let sql;
  if (1 == 1  && req.body.idUsuarios == ""  && req.body.apellido == ""  && req.body.nombre == ""  && req.body.fechanacimiento == ""  && req.body.clave == ""  && req.body.rol == "" ) {
    sql = "SELECT * from public.usuarios";
  } else {
    sql = "SELECT * from public.usuarios WHERE 1=1  and idUsuarios like '%" + req.body.idUsuarios + "%'  and apellido like '%" + req.body.apellido + "%'  and nombre like '%" + req.body.nombre + "%'  and fechanacimiento like '%" + req.body.fechanacimiento + "%'  and clave like '%" + req.body.clave + "%'  and rol like '%" + req.body.rol + "%' ;"
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result)) );
  })
});

router.post("/imprimir_usuarios", function (req, res) {
  let sql;
  if (1 == 1  && req.body.idUsuarios == ""  && req.body.apellido == ""  && req.body.nombre == ""  && req.body.fechanacimiento == ""  && req.body.clave == ""  && req.body.rol == "" ) {
    sql = "SELECT * from public.usuarios";
  } else {
    sql = "SELECT * from public.usuarios WHERE 1=1  and idUsuarios like '%" + req.body.idUsuarios + "%'  and apellido like '%" + req.body.apellido + "%'  and nombre like '%" + req.body.nombre + "%'  and fechanacimiento like '%" + req.body.fechanacimiento + "%'  and clave like '%" + req.body.clave + "%'  and rol like '%" + req.body.rol + "%' ;"
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    const jsonData = JSON.parse(JSON.stringify(result));
    stringify(jsonData, { header: true })
    .pipe(res);
    
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename='" + "download-" +sql + Date.now() + ".csv'");
  })
});




module.exports = router;
