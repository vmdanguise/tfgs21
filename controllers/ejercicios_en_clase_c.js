
  
    let express = require('express');
    let router = express.Router();
    
    class ejercicios_en_clase {
      constructor() {}
    
      getejercicios_en_claseStats() {
        return true;
      }
    
     async getReqEquals(req) {

        // aca hacemos operaciones de calculo
       // req.body.rol = req.body.rol.toUpperCase();
       // console.log("controller:" + req.body.rol);
          return req;
      }
    
    
    }
    
    module.exports = ejercicios_en_clase;
    
  