
  
    let express = require('express');
    let router = express.Router();
    
    class alarmas {
      constructor() {}
    
      getalarmasStats() {
        return true;
      }
    
     async getReqEquals(req) {

        // aca hacemos operaciones de calculo
       // req.body.rol = req.body.rol.toUpperCase();
       // console.log("controller:" + req.body.rol);
          return req;
      }
    
    
    }
    
    module.exports = alarmas;
    
  