let express = require('express');
let router = express.Router();
var mysql = require('mysql');
const stringify = require("csv-stringify");
let clases_c = require('./../controllers/clases_c');
var connection = require('./../conexion/conexion.js')
// About page route.
router.get('/', function (req, res, next) {
  sql = 'SELECT * from pilates_virtual_class.clases';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        //res.render('error',{layout:"default",erroresporparametro:err});
        res.render('clases', {layout:"default", clases: result,token: req.query.token });
        return null;
      }
      res.render('clases', {layout:"default", clases: result,token: req.query.token });
    });
});
router.post('/update_clases', async function (req, res) {
  
  var tool = new  clases_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = 'UPDATE pilates_virtual_class.clases SET idClases="'+req.body.idClases+'" ,fecha="'+req.body.fecha+'",actividades="'+req.body.actividades+'",id_profesor="'+req.body.id_profesor+'" WHERE idClases="'+req.body.idClases+'"'; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render('error',{layout:"default",erroresporparametro:err});
       return null;
     }
     sql = 'SELECT * from pilates_virtual_class.clases';
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render('error',{layout:"default",erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result) );
     });
   })
 });
router.post('/insert_clases', function (req, res) {
  let sql = 'INSERT INTO pilates_virtual_class.clases (idClases ,fecha ,actividades ,id_profesor ) values ("'+req.body.idClases+'" ,"' + req.body.fecha + '","' + req.body.actividades + '","' + req.body.id_profesor + '")';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from pilates_virtual_class.clases';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );
    });
  })
});
router.post('/delete_clases', function (req, res) {
  let sql = 'DELETE from pilates_virtual_class.clases WHERE idClases = "' + req.body.idClases + '"';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from pilates_virtual_class.clases';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );

    });
  })
});
router.post('/select_clases', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idClases == ''  && req.body.fecha == ''  && req.body.actividades == ''  && req.body.id_profesor == '' ) {
    sql = 'SELECT * from pilates_virtual_class.clases';
  } else {
    sql = 'SELECT * from pilates_virtual_class.clases WHERE 1=1  and idClases like "%' + req.body.idClases + '%"  and fecha like "%' + req.body.fecha + '%"  and actividades like "%' + req.body.actividades + '%"  and id_profesor like "%' + req.body.id_profesor + '%" ;'
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result)) );
  })
});

router.post('/imprimir_clases', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idClases == ''  && req.body.fecha == ''  && req.body.actividades == ''  && req.body.id_profesor == '' ) {
    sql = 'SELECT * from pilates_virtual_class.clases';
  } else {
    sql = 'SELECT * from pilates_virtual_class.clases WHERE 1=1  and idClases like "%' + req.body.idClases + '%"  and fecha like "%' + req.body.fecha + '%"  and actividades like "%' + req.body.actividades + '%"  and id_profesor like "%' + req.body.id_profesor + '%" ;'
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
