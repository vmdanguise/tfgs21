let express = require("express");
let router = express.Router();
const stringify = require('csv-stringify');
let asistencia_c = require("./../controllers/asistencia_c");
var connection = require("./../conexion/conexion.js")
// About page route.
router.get("/", function (req, res, next) {
  sql = "SELECT * from public.asistencia";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        //res.render("error",{layout:'default',erroresporparametro:err});
        res.render("asistencia", {layout:'default', asistencia: result.rows,token: req.query.token });
        return null;
      }
      res.render("asistencia", {layout:'default', asistencia: result.rows,token: req.query.token });
    });
});
router.post("/update_asistencia", async function (req, res) {
  
  var tool = new  asistencia_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = "UPDATE public.asistencia SET idClase='"+req.body.idClase+"' ,idAlumno='"+req.body.idAlumno+"' WHERE idClase='"+req.body.idClase+"'"; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render("error",{layout:'default',erroresporparametro:err});
       return null;
     }
     sql = "SELECT * from public.asistencia";
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render("error",{layout:'default',erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result.rows) );
     });
   })
 });
router.post("/insert_asistencia", function (req, res) {
  let sql = "INSERT INTO public.asistencia (idClase ,idAlumno ) values ('"+req.body.idClase+"' ,'" + req.body.idAlumno + "')";
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    sql = "SELECT * from public.asistencia";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error",{layout:'default',erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result.rows) );
    });
  })
});
router.post("/delete_asistencia", function (req, res) {
  let sql = "DELETE from public.asistencia WHERE idClase = '" + req.body.idClase + "'";
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    sql = "SELECT * from public.asistencia";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error",{layout:'default',erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result.rows) );

    });
  })
});
router.post("/select_asistencia", function (req, res) {
  let sql;
  if (1 == 1  && req.body.idClase == ""  && req.body.idAlumno == "" ) {
    sql = "SELECT * from public.asistencia";
  } else {
    sql = "SELECT * from public.asistencia WHERE 1=1  and idClase like '%" + req.body.idClase + "%'  and idAlumno like '%" + req.body.idAlumno + "%' ;"
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result.rows)) );
  })
});

router.post("/imprimir_asistencia", function (req, res) {
  let sql;
  if (1 == 1  && req.body.idClase == ""  && req.body.idAlumno == "" ) {
    sql = "SELECT * from public.asistencia";
  } else {
    sql = "SELECT * from public.asistencia WHERE 1=1  and idClase like '%" + req.body.idClase + "%'  and idAlumno like '%" + req.body.idAlumno + "%' ;"
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    const jsonData = JSON.parse(JSON.stringify(result.rows));
    stringify(jsonData, { header: true })
    .pipe(res);
    
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename='" + "download-" +sql + Date.now() + ".csv'");
  })
});




module.exports = router;
