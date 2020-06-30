function insertar_ejercicios_en_clase() {                                     
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/ejercicios_en_clase/insert_ejercicios_en_clase", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
            body: "token=" + document.getElementById("token").value         
 +"&idejercicios=" + document.getElementById("idejercicios").value 
 +"&idClase=" + document.getElementById("idClase").value 
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
function update_ejercicios_en_clase() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/ejercicios_en_clase/update_ejercicios_en_clase", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
             body: "token=" + document.getElementById("token").value        
 +"&idejercicios=" + document.getElementById("idejercicios").value 
 +"&idClase=" + document.getElementById("idClase").value 
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
                                                                      
function delete_ejercicios_en_clase() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/ejercicios_en_clase/delete_ejercicios_en_clase", {                          
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
           body: "token=" + document.getElementById("token").value          
 +"&idejercicios=" + document.getElementById("idejercicios").value 
 +"&idClase=" + document.getElementById("idClase").value 
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
function select_ejercicios_en_clase() {                                             
        fetch("/ejercicios_en_clase/select_ejercicios_en_clase", {              
        method: "POST",                                                     
        headers: {                                                          
            "Content-Type": "application/x-www-form-urlencoded"             
        },                                                                  
  body: "token=" + document.getElementById("token").value                   
 +"&idejercicios=" + document.getElementById("idejercicios").value 
 +"&idClase=" + document.getElementById("idClase").value 
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
<td>${valor.idejercicios}</td>         
<td>${valor.idClase}</td>         
        </tr>                                                               
        `                                                                   
    }                                                                       
    $("#Table tr").on("click", function () {                                
 let datoidejercicios = $(this).find("td:nth-child(1)").html(); $("#idejercicios").val(datoidejercicios);  
 let datoidClase = $(this).find("td:nth-child(2)").html(); $("#idClase").val(datoidClase);  
    });                                                                     
}                                                                           
function cancelar() {                                                       
 document.getElementById("idejercicios").value = ""; 
 document.getElementById("idClase").value = ""; 
    location.reload();                                                      
}                                                                           
$("#Table tr").on("click", function () {                                    
 let datoidejercicios = $(this).find("td:nth-child(1)").html(); $("#idejercicios").val(datoidejercicios);  
 let datoidClase = $(this).find("td:nth-child(2)").html(); $("#idClase").val(datoidClase);  
});                                                                        
