
      let express = require('express');
      let router = express.Router();
      var mysql = require('mysql');
      const stringify = require("csv-stringify");
      
      const fs = require("fs");
      
      var connection = require('./../conexion/conexion.js')
      
      
      //select filter
      
      router.get('/', function (req, res) {
        res.render('consultaPersonalizada', {layout:"default", token: req.query.token });
      });
      
      router.post('/sql', function (req, res) {
        let sql = req.body.consulta;
        connection.query(sql, function (err, result, rows) {
          if (err) {
            res.render('error', {layout:"default", erroresporparametro: err });
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
      