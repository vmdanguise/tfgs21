let express = require('express');
let router = express.Router();
var mysql = require('mysql');
const stringify = require("csv-stringify");
let asistencia_c = require('./../controllers/asistencia_c');
var connection = require('./../conexion/conexion.js')
// About page route.
router.get('/', function (req, res, next) {
  sql = 'SELECT * from pilates_virtual_class.asistencia';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.render('asistencia', {layout:"default", asistencia: result,token: req.query.token });
    });
});
router.post('/update_asistencia', async function (req, res) {
  
  var tool = new  asistencia_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = 'UPDATE pilates_virtual_class.asistencia SET idClase="'+req.body.idClase+'" ,idAlumno="'+req.body.idAlumno+'" WHERE idClase="'+req.body.idClase+'"'; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render('error',{layout:"default",erroresporparametro:err});
       return null;
     }
     sql = 'SELECT * from pilates_virtual_class.asistencia';
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render('error',{layout:"default",erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result) );
     });
   })
 });
router.post('/insert_asistencia', function (req, res) {
  let sql = 'INSERT INTO pilates_virtual_class.asistencia (idClase ,idAlumno ) values ("'+req.body.idClase+'" ,"' + req.body.idAlumno + '")';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from pilates_virtual_class.asistencia';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );
    });
  })
});
router.post('/delete_asistencia', function (req, res) {
  let sql = 'DELETE from pilates_virtual_class.asistencia WHERE idClase = "' + req.body.idClase + '"';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from pilates_virtual_class.asistencia';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );

    });
  })
});
router.post('/select_asistencia', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idClase == ''  && req.body.idAlumno == '' ) {
    sql = 'SELECT * from pilates_virtual_class.asistencia';
  } else {
    sql = 'SELECT * from pilates_virtual_class.asistencia WHERE 1=1  and idClase like "%' + req.body.idClase + '%"  and idAlumno like "%' + req.body.idAlumno + '%" ;'
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result)) );
  })
});

router.post('/imprimir_asistencia', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idClase == ''  && req.body.idAlumno == '' ) {
    sql = 'SELECT * from pilates_virtual_class.asistencia';
  } else {
    sql = 'SELECT * from pilates_virtual_class.asistencia WHERE 1=1  and idClase like "%' + req.body.idClase + '%"  and idAlumno like "%' + req.body.idAlumno + '%" ;'
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    const jsonData = JSON.parse(JSON.stringify(result));
    stringify(jsonData, { header: true })
    .pipe(res);
    
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="' + 'download-' +sql + Date.now() + '.csv"');
  })
});




module.exports = router;
