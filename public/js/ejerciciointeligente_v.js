function insertar_ejerciciointeligente() {                                     
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/ejerciciointeligente/insert_ejerciciointeligente", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
            body: "token=" + document.getElementById("token").value         
 +"&idejercicioInteligente=" + document.getElementById("idejercicioInteligente").value 
 +"&tipo=" + document.getElementById("tipo").value 
 +"&escuela=" + document.getElementById("escuela").value 
 +"&asistenteVirtual=" + document.getElementById("asistenteVirtual").value 
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
function update_ejerciciointeligente() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/ejerciciointeligente/update_ejerciciointeligente", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
             body: "token=" + document.getElementById("token").value        
 +"&idejercicioInteligente=" + document.getElementById("idejercicioInteligente").value 
 +"&tipo=" + document.getElementById("tipo").value 
 +"&escuela=" + document.getElementById("escuela").value 
 +"&asistenteVirtual=" + document.getElementById("asistenteVirtual").value 
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
                                                                      
function delete_ejerciciointeligente() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/ejerciciointeligente/delete_ejerciciointeligente", {                          
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
           body: "token=" + document.getElementById("token").value          
 +"&idejercicioInteligente=" + document.getElementById("idejercicioInteligente").value 
 +"&tipo=" + document.getElementById("tipo").value 
 +"&escuela=" + document.getElementById("escuela").value 
 +"&asistenteVirtual=" + document.getElementById("asistenteVirtual").value 
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
function select_ejerciciointeligente() {                                             
        fetch("/ejerciciointeligente/select_ejerciciointeligente", {              
        method: "POST",                                                     
        headers: {                                                          
            "Content-Type": "application/x-www-form-urlencoded"             
        },                                                                  
  body: "token=" + document.getElementById("token").value                   
 +"&idejercicioInteligente=" + document.getElementById("idejercicioInteligente").value 
 +"&tipo=" + document.getElementById("tipo").value 
 +"&escuela=" + document.getElementById("escuela").value 
 +"&asistenteVirtual=" + document.getElementById("asistenteVirtual").value 
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
<td>${valor.idejercicioInteligente}</td>         
<td>${valor.tipo}</td>         
<td>${valor.escuela}</td>         
<td>${valor.asistenteVirtual}</td>         
        </tr>                                                               
        `                                                                   
    }                                                                       
    $("#Table tr").on("click", function () {                                
 let datoidejercicioInteligente = $(this).find("td:nth-child(1)").html(); $("#idejercicioInteligente").val(datoidejercicioInteligente);  
 let datotipo = $(this).find("td:nth-child(2)").html(); $("#tipo").val(datotipo);  
 let datoescuela = $(this).find("td:nth-child(3)").html(); $("#escuela").val(datoescuela);  
 let datoasistenteVirtual = $(this).find("td:nth-child(4)").html(); $("#asistenteVirtual").val(datoasistenteVirtual);  
    });                                                                     
}                                                                           
function cancelar() {                                                       
 document.getElementById("idejercicioInteligente").value = ""; 
 document.getElementById("tipo").value = ""; 
 document.getElementById("escuela").value = ""; 
 document.getElementById("asistenteVirtual").value = ""; 
    location.reload();                                                      
}                                                                           
$("#Table tr").on("click", function () {                                    
 let datoidejercicioInteligente = $(this).find("td:nth-child(1)").html(); $("#idejercicioInteligente").val(datoidejercicioInteligente);  
 let datotipo = $(this).find("td:nth-child(2)").html(); $("#tipo").val(datotipo);  
 let datoescuela = $(this).find("td:nth-child(3)").html(); $("#escuela").val(datoescuela);  
 let datoasistenteVirtual = $(this).find("td:nth-child(4)").html(); $("#asistenteVirtual").val(datoasistenteVirtual);  
});                                                                        
