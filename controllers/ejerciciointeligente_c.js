
  
    let express = require('express');
    let router = express.Router();
    
    class ejerciciointeligente {
      constructor() {}
    
      getejerciciointeligenteStats() {
        return true;
      }
    
     async getReqEquals(req) {

        // aca hacemos operaciones de calculo
       // req.body.rol = req.body.rol.toUpperCase();
       // console.log("controller:" + req.body.rol);
          return req;
      }
    
    
    }
    
    module.exports = ejerciciointeligente;
    
  