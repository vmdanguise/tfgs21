let express = require('express');
let router = express.Router();
var mysql = require('mysql');
const stringify = require("csv-stringify");
let ejercicios_en_clase_c = require('./../controllers/ejercicios_en_clase_c');
var connection = require('./../conexion/conexion.js')
// About page route.
router.get('/', function (req, res, next) {
  sql = 'SELECT * from pilates_virtual_class.ejercicios_en_clase';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.render('ejercicios_en_clase', {layout:"default", ejercicios_en_clase: result,token: req.query.token });
    });
});
router.post('/update_ejercicios_en_clase', async function (req, res) {
  
  var tool = new  ejercicios_en_clase_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = 'UPDATE pilates_virtual_class.ejercicios_en_clase SET idejercicios="'+req.body.idejercicios+'" ,idClase="'+req.body.idClase+'" WHERE idejercicios="'+req.body.idejercicios+'"'; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render('error',{layout:"default",erroresporparametro:err});
       return null;
     }
     sql = 'SELECT * from pilates_virtual_class.ejercicios_en_clase';
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render('error',{layout:"default",erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result) );
     });
   })
 });
router.post('/insert_ejercicios_en_clase', function (req, res) {
  let sql = 'INSERT INTO pilates_virtual_class.ejercicios_en_clase (idejercicios ,idClase ) values ("'+req.body.idejercicios+'" ,"' + req.body.idClase + '")';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from pilates_virtual_class.ejercicios_en_clase';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );
    });
  })
});
router.post('/delete_ejercicios_en_clase', function (req, res) {
  let sql = 'DELETE from pilates_virtual_class.ejercicios_en_clase WHERE idejercicios = "' + req.body.idejercicios + '"';
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from pilates_virtual_class.ejercicios_en_clase';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result) );

    });
  })
});
router.post('/select_ejercicios_en_clase', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idejercicios == ''  && req.body.idClase == '' ) {
    sql = 'SELECT * from pilates_virtual_class.ejercicios_en_clase';
  } else {
    sql = 'SELECT * from pilates_virtual_class.ejercicios_en_clase WHERE 1=1  and idejercicios like "%' + req.body.idejercicios + '%"  and idClase like "%' + req.body.idClase + '%" ;'
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result)) );
  })
});

router.post('/imprimir_ejercicios_en_clase', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idejercicios == ''  && req.body.idClase == '' ) {
    sql = 'SELECT * from pilates_virtual_class.ejercicios_en_clase';
  } else {
    sql = 'SELECT * from pilates_virtual_class.ejercicios_en_clase WHERE 1=1  and idejercicios like "%' + req.body.idejercicios + '%"  and idClase like "%' + req.body.idClase + '%" ;'
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
