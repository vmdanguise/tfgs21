let express = require("express");
let router = express.Router();
var mysql = require("mysql");
const stringify = require('csv-stringify');
let certificados_c = require("./../controllers/certificados_c");
var connection = require("./../conexion/conexion.js")
// About page route.
router.get("/", function (req, res, next) {
  sql = "SELECT * from public.certificados";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        //res.render("error",{layout:'default',erroresporparametro:err});
        res.render("certificados", {layout:'default', certificados: result.rows,token: req.query.token });
        return null;
      }
      res.render("certificados", {layout:'default', certificados: result.rows,token: req.query.token });
    });
});
router.post("/update_certificados", async function (req, res) {
  
  var tool = new  certificados_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = "UPDATE public.certificados SET idcertificados='"+req.body.idcertificados+"' ,idAlumno='"+req.body.idAlumno+"',fechaVencimiento='"+req.body.fechaVencimiento+"' WHERE idcertificados='"+req.body.idcertificados+"'"; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render("error",{layout:'default',erroresporparametro:err});
       return null;
     }
     sql = "SELECT * from public.certificados";
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render("error",{layout:'default',erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result.rows) );
     });
   })
 });
router.post("/insert_certificados", function (req, res) {
  let sql = "INSERT INTO public.certificados (idcertificados ,idAlumno ,fechaVencimiento ) values ('"+req.body.idcertificados+"' ,'" + req.body.idAlumno + "','" + req.body.fechaVencimiento + "')";
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    sql = "SELECT * from public.certificados";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error",{layout:'default',erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result.rows) );
    });
  })
});
router.post("/delete_certificados", function (req, res) {
  let sql = "DELETE from public.certificados WHERE idcertificados = '" + req.body.idcertificados + "'";
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    sql = "SELECT * from public.certificados";
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render("error",{layout:'default',erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result.rows) );

    });
  })
});
router.post("/select_certificados", function (req, res) {
  let sql;
  if (1 == 1  && req.body.idcertificados == ""  && req.body.idAlumno == ""  && req.body.fechaVencimiento == "" && req.body.fechaVencimientoHasta == "" && req.body.fechaVencimientoDesde == "") {
    sql = "SELECT * from public.certificados";
  } else {
    sql = "SELECT * from public.certificados WHERE 1=1 " 
          + " and (idcertificados = TO_NUMBER('0'||'" + req.body.idcertificados + "','999')  or length('" + req.body.idcertificados + "') = 0) "
          + "  and idalumno like '%" + req.body.idAlumno 
          + "%' and (fechavencimiento >= TO_DATE('" + req.body.fechaVencimientoDesde + "','YYYY-MM-DD') or length('" + req.body.fechaVencimientoDesde + "') = 0) " 
          + "  and (fechavencimiento <= TO_DATE('" + req.body.fechaVencimientoHasta + "','YYYY-MM-DD') or length('" + req.body.fechaVencimientoHasta + "') = 0) " 
          + "  and (fechavencimiento   = TO_DATE('" + req.body.fechaVencimiento + "','YYYY-MM-DD') or length('" + req.body.fechaVencimiento + "') = 0) ;"
  }
  console.log(sql);
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render("error",{layout:'default',erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result.rows)) );
  })
});

router.post("/imprimir_certificados", function (req, res) {
  let sql;
  if (1 == 1  && req.body.idcertificados == ""  && req.body.idAlumno == ""  && req.body.fechaVencimiento == "" && req.body.fechaVencimientoHasta == "" && req.body.fechaVencimientoDesde == "") {
    sql = "SELECT * from public.certificados";
  } else {
    sql = "SELECT * from public.certificados WHERE 1=1  and idcertificados like '%" + req.body.idcertificados + "%'  and idAlumno like '%" + req.body.idAlumno + "%'  and fechaVencimiento like '%" + req.body.fechaVencimiento + "%' ;"
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
