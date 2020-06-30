function insertar_asistencia() {                                     
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/asistencia/insert_asistencia", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
            body: "token=" + document.getElementById("token").value         
 +"&idClase=" + document.getElementById("idClase").value 
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
function update_asistencia() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/asistencia/update_asistencia", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
             body: "token=" + document.getElementById("token").value        
 +"&idClase=" + document.getElementById("idClase").value 
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
                                                                      
function delete_asistencia() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/asistencia/delete_asistencia", {                          
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
           body: "token=" + document.getElementById("token").value          
 +"&idClase=" + document.getElementById("idClase").value 
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
function select_asistencia() {                                             
        fetch("/asistencia/select_asistencia", {              
        method: "POST",                                                     
        headers: {                                                          
            "Content-Type": "application/x-www-form-urlencoded"             
        },                                                                  
  body: "token=" + document.getElementById("token").value                   
 +"&idClase=" + document.getElementById("idClase").value 
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
<td>${valor.idClase}</td>         
<td>${valor.idAlumno}</td>         
        </tr>                                                               
        `                                                                   
    }                                                                       
    $("#Table tr").on("click", function () {                                
 let datoidClase = $(this).find("td:nth-child(1)").html(); $("#idClase").val(datoidClase);  
 let datoidAlumno = $(this).find("td:nth-child(2)").html(); $("#idAlumno").val(datoidAlumno);  
    });                                                                     
}                                                                           
function cancelar() {                                                       
 document.getElementById("idClase").value = ""; 
 document.getElementById("idAlumno").value = ""; 
    location.reload();                                                      
}                                                                           
$("#Table tr").on("click", function () {                                    
 let datoidClase = $(this).find("td:nth-child(1)").html(); $("#idClase").val(datoidClase);  
 let datoidAlumno = $(this).find("td:nth-child(2)").html(); $("#idAlumno").val(datoidAlumno);  
});                                                                        
