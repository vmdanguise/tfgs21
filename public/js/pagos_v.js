function insertar_pagos() {                                     
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/pagos/insert_pagos", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
            body: "token=" + document.getElementById("token").value         
 +"&idpagos=" + document.getElementById("idpagos").value 
 +"&fecha=" + document.getElementById("fecha").value 
 +"&idAlumno=" + document.getElementById("idAlumno").value 
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
function update_pagos() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/pagos/update_pagos", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
             body: "token=" + document.getElementById("token").value        
 +"&idpagos=" + document.getElementById("idpagos").value 
 +"&fecha=" + document.getElementById("fecha").value 
 +"&idAlumno=" + document.getElementById("idAlumno").value 
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
                                                                      
function delete_pagos() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/pagos/delete_pagos", {                          
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
           body: "token=" + document.getElementById("token").value          
 +"&idpagos=" + document.getElementById("idpagos").value 
 +"&fecha=" + document.getElementById("fecha").value 
 +"&idAlumno=" + document.getElementById("idAlumno").value 
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
function select_pagos() {                                             
        fetch("/pagos/select_pagos", {              
        method: "POST",                                                     
        headers: {                                                          
            "Content-Type": "application/x-www-form-urlencoded"             
        },                                                                  
  body: "token=" + document.getElementById("token").value                   
 +"&idpagos=" + document.getElementById("idpagos").value 
 +"&fecha=" + document.getElementById("fecha").value 
 +"&idAlumno=" + document.getElementById("idAlumno").value 
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
<td>${valor.idpagos}</td>         
<td>${valor.fecha}</td>         
<td>${valor.idAlumno}</td>         
        </tr>                                                               
        `                                                                   
    }                                                                       
    $("#Table tr").on("click", function () {                                
 let datoidpagos = $(this).find("td:nth-child(1)").html(); $("#idpagos").val(datoidpagos);  
 let datofecha = $(this).find("td:nth-child(2)").html(); $("#fecha").val(moment(datofecha).format("YYYY-MM-DD"));  
 let datoidAlumno = $(this).find("td:nth-child(3)").html(); $("#idAlumno").val(datoidAlumno);  
    });                                                                     
}                                                                           
function cancelar() {                                                       
 document.getElementById("idpagos").value = ""; 
 document.getElementById("fecha").value = ""; 
 document.getElementById("idAlumno").value = ""; 
    location.reload();                                                      
}                                                                           
$("#Table tr").on("click", function () {                                    
 let datoidpagos = $(this).find("td:nth-child(1)").html(); $("#idpagos").val(datoidpagos);  
 let datofecha = $(this).find("td:nth-child(2)").html(); $("#fecha").val(moment(datofecha).format("YYYY-MM-DD"));  
 let datoidAlumno = $(this).find("td:nth-child(3)").html(); $("#idAlumno").val(datoidAlumno);  
});                                                                        
