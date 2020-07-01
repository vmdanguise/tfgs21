let express = require('express');
let router = express.Router();
var mysql = require('mysql');
const stringify = require("csv-stringify");
let pagos_c = require('./../controllers/pagos_c');
var connection = require('./../conexion/conexion.js')
// About page route.
router.get('/', function (req, res, next) {
  sql = 'SELECT * from pilates_virtual_class.pagos';
    connection.query(sql, function (err, result, rows) {
      if (err) {
      //  res.render('error',{layout:"default",erroresporparametro:err});
      res.render('pagos', {layout:"default", pagos: result,token: req.query.token });  
      return null;
      }
      res.render('pagos', {layout:"default", pagos: result,token: req.query.token });
    });
});
router.post('/update_pagos', async function (req, res) {
  
  var tool = new  pagos_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = 'UPDATE pilates_virtual_class.pagos SET idpagos="'+req.body.idpagos+'" ,fecha="'+req.body.fecha+'",idAlumno="'+req.body.idAlumno+'" WHERE idpagos="'+req.body.idpagos+'"'; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render('error',{layout:"default",erroresporparametro:err});
       return null;
     }
     sql = 'SELECT * from pilates_virtual_class.pagos';
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render('error',{layout:"default",erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result) );
     });
   })
 });
router.post('/insert_pagos', function (req, res) {
  let sql = 'INSERT INTO pilates_virtual_class.pagos (idpagos ,fecha ,idAlumno ) values ("'+req.body.idpagos+'" ,"' + req.body.fecha + '","' + req.body.idAlumno + '")';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from pilates_virtual_class.pagos';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );
    });
  })
});
router.post('/delete_pagos', function (req, res) {
  let sql = 'DELETE from pilates_virtual_class.pagos WHERE idpagos = "' + req.body.idpagos + '"';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from pilates_virtual_class.pagos';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );

    });
  })
});
router.post('/select_pagos', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idpagos == ''  && req.body.fecha == ''  && req.body.idAlumno == '' ) {
    sql = 'SELECT * from pilates_virtual_class.pagos';
  } else {
    sql = 'SELECT * from pilates_virtual_class.pagos WHERE 1=1  and idpagos like "%' + req.body.idpagos + '%"  and fecha like "%' + req.body.fecha + '%"  and idAlumno like "%' + req.body.idAlumno + '%" ;'
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result)) );
  })
});

router.post('/imprimir_pagos', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idpagos == ''  && req.body.fecha == ''  && req.body.idAlumno == '' ) {
    sql = 'SELECT * from pilates_virtual_class.pagos';
  } else {
    sql = 'SELECT * from pilates_virtual_class.pagos WHERE 1=1  and idpagos like "%' + req.body.idpagos + '%"  and fecha like "%' + req.body.fecha + '%"  and idAlumno like "%' + req.body.idAlumno + '%" ;'
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
