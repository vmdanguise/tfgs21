let express = require('express');
let router = express.Router();


const stringify = require("csv-stringify");
let alarmas_c = require('./../controllers/alarmas_c');
var connection = require('./../conexion/conexion.js')
// About page route.
router.get('/', function (req, res, next) {
  sql = 'SELECT * from public.alarmas';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.render('alarmas', {layout:"default", alarmas: result.rows,token: req.query.token });
      console.log(result.rows);
    });
});
router.post('/update_alarmas', async function (req, res) {
  
  var tool = new  alarmas_c();
  // aqui hacemos calculos y lo que sea
  req = await  tool.getReqEquals(req);

  let sql = "UPDATE public.alarmas SET idalarmas='"+req.body.idalarmas+"' ,alarmascol='"+req.body.alarmascol+"',diasAntes='"+req.body.diasAntes+"',CertificadoFK='"+req.body.CertificadoFK+"',PagoFK='"+req.body.PagoFK+"' WHERE idalarmas='"+req.body.idalarmas+"'"; 
   connection.query(sql, function (err, result, rows) {
     if (err) {
       res.render('error',{layout:"default",erroresporparametro:err});
       return null;
     }
     sql = "SELECT * from public.alarmas";
     connection.query(sql, function (err, result, rows) {
       if (err) {
         res.render("error",{layout:"default",erroresporparametro:err});
         return null;
       }
       res.send( JSON.stringify(result.rows) );
     });
   })
 });
router.post("/insert_alarmas", function (req, res) {
  let sql = "INSERT INTO public.alarmas (idalarmas ,alarmascol ,diasAntes ,CertificadoFK ,PagoFK ) values ("+req.body.idalarmas+" ,'" + req.body.alarmascol + "','" + req.body.diasAntes + "'," + req.body.CertificadoFK + "," + req.body.PagoFK + ")";
  console.log(sql);
  connection.query(sql, function (err, result) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      console.log(err);
      return null;
    }
    sql = 'SELECT * from public.alarmas';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        console.log(err);
        return null;
      }
      res.send( JSON.stringify(result.rows) );
    });
  })
});
router.post('/delete_alarmas', function (req, res) {
  let sql = 'DELETE from public.alarmas WHERE idalarmas = ' + req.body.idalarmas + '';
  console.log(sql);
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    sql = 'SELECT * from public.alarmas';
    connection.query(sql, function (err, result, rows) {
      if (err) {
        res.render('error',{layout:"default",erroresporparametro:err});
        return null;
      }
      res.send( JSON.stringify(result.rows) );

    });
  })
});
router.post('/select_alarmas', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idalarmas == ''  && req.body.alarmascol == ''  && req.body.diasAntes == ''  && req.body.CertificadoFK == ''  && req.body.PagoFK == '' ) {
    sql = 'SELECT * from public.alarmas';
  } else {
    sql = 'SELECT * from public.alarmas WHERE 1=1  and idalarmas like "%' + req.body.idalarmas + '%"  and alarmascol like "%' + req.body.alarmascol + '%"  and diasAntes like "%' + req.body.diasAntes + '%"  and CertificadoFK like "%' + req.body.CertificadoFK + '%"  and PagoFK like "%' + req.body.PagoFK + '%" ;'
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    res.send( JSON.parse(JSON.stringify(result.rows)) );
  })
});

router.post('/imprimir_alarmas', function (req, res) {
  let sql;
  if (1 == 1  && req.body.idalarmas == ''  && req.body.alarmascol == ''  && req.body.diasAntes == ''  && req.body.CertificadoFK == ''  && req.body.PagoFK == '' ) {
    sql = "SELECT * from public.alarmas";
  } else {
    sql = "SELECT * from public.alarmas WHERE 1=1  and idalarmas like '%" + req.body.idalarmas + "%'  and alarmascol like '%" + req.body.alarmascol + "%'  and diasAntes like '%" + req.body.diasAntes + "%'  and CertificadoFK like '%" + req.body.CertificadoFK + "%'  and PagoFK like '%" + req.body.PagoFK + "%' ;"
  }
  connection.query(sql, function (err, result, rows) {
    if (err) {
      res.render('error',{layout:"default",erroresporparametro:err});
      return null;
    }
    const jsonData = JSON.parse(JSON.stringify(result.rows));
    stringify(jsonData, { header: true })
    .pipe(res);
    
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="' + 'download-' +sql + Date.now() + '.csv"');
  })
});




module.exports = router;
