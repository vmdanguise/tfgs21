
  
    let express = require('express');
    let router = express.Router();
    
    class usuarios {
      constructor() {}
    
      getusuariosStats() {
        return true;
      }
    
     async getReqEquals(req) {

        // aca hacemos operaciones de calculo
       // req.body.rol = req.body.rol.toUpperCase();
       // console.log("controller:" + req.body.rol);
          return req;
      }
    
    
    }
    
    module.exports = usuarios;
    
  