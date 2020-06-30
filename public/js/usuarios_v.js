function insertar_usuarios() {                                     
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/usuarios/insert_usuarios", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
            body: "token=" + document.getElementById("token").value         
 +"&idUsuarios=" + document.getElementById("idUsuarios").value 
 +"&apellido=" + document.getElementById("apellido").value 
 +"&nombre=" + document.getElementById("nombre").value 
 +"&fechanacimiento=" + document.getElementById("fechanacimiento").value 
 +"&clave=" + document.getElementById("clave").value 
 +"&rol=" + document.getElementById("rol").value 
        })                                                                  
            .then(function (response) {                                     
                return response.json();                                     
            })                                                              
            .then(function (data) {                                         
                alert("Alta Ok:" + data);                                   
            })                                                              
            .catch(function (err) {                                         
                alert("Alta NOk:" + data);                                  
            })                                                              
            .finally(function () {                                          
                cancelar();                                                 
            });                                                             
    } else {                                                                
        null;                                                               
    }                                                                       
}                                                                           
function update_usuarios() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/usuarios/update_usuarios", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
             body: "token=" + document.getElementById("token").value        
 +"&idUsuarios=" + document.getElementById("idUsuarios").value 
 +"&apellido=" + document.getElementById("apellido").value 
 +"&nombre=" + document.getElementById("nombre").value 
 +"&fechanacimiento=" + document.getElementById("fechanacimiento").value 
 +"&clave=" + document.getElementById("clave").value 
 +"&rol=" + document.getElementById("rol").value 
	    })                                                                   
            .then(function (response) {                                     
                return response.json();                                     
            })                                                              
            .then(function (data) {                                         
                alert("Modificado Ok:" + data);                             
            })                                                              
            .catch(function (err) {                                         
                alert("Modificado NOk:" + data);                            
            })                                                              
            .finally(function () {                                          
                cancelar();                                                 
            });                                                             
    } else {                                                                
        null;                                                               
    }                                                                       
}   
                                                                      
function delete_usuarios() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/usuarios/delete_usuarios", {                          
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
           body: "token=" + document.getElementById("token").value          
 +"&idUsuarios=" + document.getElementById("idUsuarios").value 
 +"&apellido=" + document.getElementById("apellido").value 
 +"&nombre=" + document.getElementById("nombre").value 
 +"&fechanacimiento=" + document.getElementById("fechanacimiento").value 
 +"&clave=" + document.getElementById("clave").value 
 +"&rol=" + document.getElementById("rol").value 
        })                                                                  
            .then(function (response) {                                     
                return response.json();                                     
            })                                                              
            .then(function (data) {                                         
            })                                                              
            .catch(function (err) {                                         
            })                                                              
            .finally(function () {                                          
                cancelar();                                                 
            });                                                             
    } else {                                                                
        null;                                                               
    }                                                                       
}                                                                           
function select_usuarios() {                                             
        fetch("/usuarios/select_usuarios", {              
        method: "POST",                                                     
        headers: {                                                          
            "Content-Type": "application/x-www-form-urlencoded"             
        },                                                                  
  body: "token=" + document.getElementById("token").value                   
 +"&idUsuarios=" + document.getElementById("idUsuarios").value 
 +"&apellido=" + document.getElementById("apellido").value 
 +"&nombre=" + document.getElementById("nombre").value 
 +"&fechanacimiento=" + document.getElementById("fechanacimiento").value 
 +"&clave=" + document.getElementById("clave").value 
 +"&rol=" + document.getElementById("rol").value 
   })                                                                       
        .then(res => res.json())                                            
        .then(datos => {                                                    
            tabla(datos)                                                    
        }                                                                   
        );                                                                  
}                                                                           
function tabla(datos) {                                                     
    contenido.innerHTML = "";                                               
    for (let valor of datos) {                                              
        contenido.innerHTML += `                                            
        <tr>                                                                
<td>${valor.idUsuarios}</td>         
<td>${valor.apellido}</td>         
<td>${valor.nombre}</td>         
<td>${valor.fechanacimiento}</td>         
<td>${valor.clave}</td>         
<td>${valor.rol}</td>         
        </tr>                                                               
        `                                                                   
    }                                                                       
    $("#Table tr").on("click", function () {                                
 let datoidUsuarios = $(this).find("td:nth-child(1)").html(); $("#idUsuarios").val(datoidUsuarios);  
 let datoapellido = $(this).find("td:nth-child(2)").html(); $("#apellido").val(datoapellido);  
 let datonombre = $(this).find("td:nth-child(3)").html(); $("#nombre").val(datonombre);  
 let datofechanacimiento = $(this).find("td:nth-child(4)").html(); $("#fechanacimiento").val(datofechanacimiento);  
 let datoclave = $(this).find("td:nth-child(5)").html(); $("#clave").val(datoclave);  
 let datorol = $(this).find("td:nth-child(6)").html(); $("#rol").val(datorol);  
    });                                                                     
}                                                                           
function cancelar() {                                                       
 document.getElementById("idUsuarios").value = ""; 
 document.getElementById("apellido").value = ""; 
 document.getElementById("nombre").value = ""; 
 document.getElementById("fechanacimiento").value = ""; 
 document.getElementById("clave").value = ""; 
 document.getElementById("rol").value = ""; 
    location.reload();                                                      
}                                                                           
$("#Table tr").on("click", function () {                                    
 let datoidUsuarios = $(this).find("td:nth-child(1)").html(); $("#idUsuarios").val(datoidUsuarios);  
 let datoapellido = $(this).find("td:nth-child(2)").html(); $("#apellido").val(datoapellido);  
 let datonombre = $(this).find("td:nth-child(3)").html(); $("#nombre").val(datonombre);  
 let datofechanacimiento = $(this).find("td:nth-child(4)").html(); $("#fechanacimiento").val(datofechanacimiento);  
 let datoclave = $(this).find("td:nth-child(5)").html(); $("#clave").val(datoclave);  
 let datorol = $(this).find("td:nth-child(6)").html(); $("#rol").val(datorol);  
});                                                                        
