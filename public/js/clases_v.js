function insertar_clases() {                                     
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/clases/insert_clases", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
            body: "token=" + document.getElementById("token").value         
 +"&idClases=" + document.getElementById("idClases").value 
 +"&fecha=" + document.getElementById("fecha").value 
 +"&actividades=" + document.getElementById("actividades").value 
 +"&id_profesor=" + document.getElementById("id_profesor").value 
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
function update_clases() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/clases/update_clases", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
             body: "token=" + document.getElementById("token").value        
 +"&idClases=" + document.getElementById("idClases").value 
 +"&fecha=" + document.getElementById("fecha").value 
 +"&actividades=" + document.getElementById("actividades").value 
 +"&id_profesor=" + document.getElementById("id_profesor").value 
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
                                                                      
function delete_clases() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/clases/delete_clases", {                          
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
           body: "token=" + document.getElementById("token").value          
 +"&idClases=" + document.getElementById("idClases").value 
 +"&fecha=" + document.getElementById("fecha").value 
 +"&actividades=" + document.getElementById("actividades").value 
 +"&id_profesor=" + document.getElementById("id_profesor").value 
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
function select_clases() {                                             
        fetch("/clases/select_clases", {              
        method: "POST",                                                     
        headers: {                                                          
            "Content-Type": "application/x-www-form-urlencoded"             
        },                                                                  
  body: "token=" + document.getElementById("token").value                   
 +"&idClases=" + document.getElementById("idClases").value 
 +"&fecha=" + document.getElementById("fecha").value 
 +"&actividades=" + document.getElementById("actividades").value 
 +"&id_profesor=" + document.getElementById("id_profesor").value 
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
<td>${valor.idClases}</td>         
<td>${valor.fecha}</td>         
<td>${valor.actividades}</td>         
<td>${valor.id_profesor}</td>         
        </tr>                                                               
        `                                                                   
    }                                                                       
    $("#Table tr").on("click", function () {                                
 let datoidClases = $(this).find("td:nth-child(1)").html(); $("#idClases").val(datoidClases);  
 let datofecha = $(this).find("td:nth-child(2)").html(); $("#fecha").val(moment(datofecha).format("YYYY-MM-DD"));  
 let datoactividades = $(this).find("td:nth-child(3)").html(); $("#actividades").val(datoactividades);  
 let datoid_profesor = $(this).find("td:nth-child(4)").html(); $("#id_profesor").val(datoid_profesor);  
    });                                                                     
}                                                                           
function cancelar() {                                                       
 document.getElementById("idClases").value = ""; 
 document.getElementById("fecha").value = ""; 
 document.getElementById("actividades").value = ""; 
 document.getElementById("id_profesor").value = ""; 
    location.reload();                                                      
}                                                                           
$("#Table tr").on("click", function () {                                    
 let datoidClases = $(this).find("td:nth-child(1)").html(); $("#idClases").val(datoidClases);  
 let datofecha = $(this).find("td:nth-child(2)").html(); $("#fecha").val(moment(datofecha).format("YYYY-MM-DD"));  
 let datoactividades = $(this).find("td:nth-child(3)").html(); $("#actividades").val(datoactividades);  
 let datoid_profesor = $(this).find("td:nth-child(4)").html(); $("#id_profesor").val(datoid_profesor);  
});                                                                        
