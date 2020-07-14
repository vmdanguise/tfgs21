let express = require("express");
let router = express.Router();
var mysql = require("mysql");
const stringify = require('csv-stringify');
let ejerciciointeligente_c = require("./../controllers/ejerciciointeligente_c");
var connection = require("./../conexion/conexion.js")
// About page route.
router.get("/", function (req, res, next) {
  sql = "SELECT * from public.ejerciciointeligente";
    connection.query(sql, function (err, result, rows) {
      if (err) {
      //  res.render("error",{layout:'default',erroresporparametro:err});
      res.render("ejerciciointeligente", {layout:'default', ejerciciointeligente: result,token: req.query.token }); 
      return null;
      }
      res.render("ejerciciointeligente", {layout:'default', ejerciciointeligente: result,token: req.query.token });
    });
});
router.post("/update_ejerciciointeligente", async function (req, res) {
  
  var tool = new  ejerciciointeligente_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = "UPDATE public.ejerciciointeligente SET idejercicioInteligente='"+req.body.idejercicioInteligente+"' ,tipo='"+req.body.tipo+"',escuela='"+req.body.escuela+"',asistenteVirtual='"+req.body.asistenteVirtual+"' WHERE idejercicioInteligente='"+req.body.idejercicioInteligente+"'"; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render("error",{layout:'default',erroresporparametro:err});
       return null;
     }
     sql = "SELECT * from public.ejerciciointeligente";
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render("error",{layout:'default',erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result) );
     });
   })
 });
router.post("/insert_ejerciciointeligente", function (req, res) {
  let sql = "INSERT INTO public.ejerciciointeligente (idejercicioInteligente ,tipo ,escuela ,asistenteVirtual ) values ('"+req.body.idejercicioInteligente+"' ,'" + req.body.tipo + "','" + req.body.escuela + "','" + req.body.asistenteVirtual + "')";
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    sql = "SELECT * from public.ejerciciointeligente";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error",{layout:'default',erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );
    });
  })
});
router.post("/delete_ejerciciointeligente", function (req, res) {
  let sql = "DELETE from public.ejerciciointeligente WHERE idejercicioInteligente = '" + req.body.idejercicioInteligente + "'";
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    sql = "SELECT * from public.ejerciciointeligente";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error",{layout:'default',erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );

    });
  })
});
router.post("/select_ejerciciointeligente", function (req, res) {
  let sql;
  if (1 == 1  && req.body.idejercicioInteligente == ""  && req.body.tipo == ""  && req.body.escuela == ""  && req.body.asistenteVirtual == "" ) {
    sql = "SELECT * from public.ejerciciointeligente";
  } else {
    sql = "SELECT * from public.ejerciciointeligente WHERE 1=1  and idejercicioInteligente like '%" + req.body.idejercicioInteligente + "%'  and tipo like '%" + req.body.tipo + "%'  and escuela like '%" + req.body.escuela + "%'  and asistenteVirtual like '%" + req.body.asistenteVirtual + "%' ;"
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result)) );
  })
});

router.post("/imprimir_ejerciciointeligente", function (req, res) {
  let sql;
  if (1 == 1  && req.body.idejercicioInteligente == ""  && req.body.tipo == ""  && req.body.escuela == ""  && req.body.asistenteVirtual == "" ) {
    sql = "SELECT * from public.ejerciciointeligente";
  } else {
    sql = "SELECT * from public.ejerciciointeligente WHERE 1=1  and idejercicioInteligente like '%" + req.body.idejercicioInteligente + "%'  and tipo like '%" + req.body.tipo + "%'  and escuela like '%" + req.body.escuela + "%'  and asistenteVirtual like '%" + req.body.asistenteVirtual + "%' ;"
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
