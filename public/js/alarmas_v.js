function insertar_alarmas() {                                     
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/alarmas/insert_alarmas", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
            body: "token=" + document.getElementById("token").value         
 +"&idalarmas=" + document.getElementById("idalarmas").value 
 +"&alarmascol=" + document.getElementById("alarmascol").value 
 +"&diasAntes=" + document.getElementById("diasAntes").value 
 +"&CertificadoFK=" + document.getElementById("CertificadoFK").value 
 +"&PagoFK=" + document.getElementById("PagoFK").value 
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
function update_alarmas() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/alarmas/update_alarmas", {              
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
             body: "token=" + document.getElementById("token").value        
 +"&idalarmas=" + document.getElementById("idalarmas").value 
 +"&alarmascol=" + document.getElementById("alarmascol").value 
 +"&diasAntes=" + document.getElementById("diasAntes").value 
 +"&CertificadoFK=" + document.getElementById("CertificadoFK").value 
 +"&PagoFK=" + document.getElementById("PagoFK").value 
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
                                                                      
function delete_alarmas() {                                             
    var r = confirm("Confirma??");                                          
    if (r == true) {                                                        
        fetch("/alarmas/delete_alarmas", {                          
            method: "POST",                                                 
            headers: {                                                      
                "Content-Type": "application/x-www-form-urlencoded"         
            },                                                              
           body: "token=" + document.getElementById("token").value          
 +"&idalarmas=" + document.getElementById("idalarmas").value 
 +"&alarmascol=" + document.getElementById("alarmascol").value 
 +"&diasAntes=" + document.getElementById("diasAntes").value 
 +"&CertificadoFK=" + document.getElementById("CertificadoFK").value 
 +"&PagoFK=" + document.getElementById("PagoFK").value 
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
function select_alarmas() {                                             
        fetch("/alarmas/select_alarmas", {              
        method: "POST",                                                     
        headers: {                                                          
            "Content-Type": "application/x-www-form-urlencoded"             
        },                                                                  
  body: "token=" + document.getElementById("token").value                   
 +"&idalarmas=" + document.getElementById("idalarmas").value 
 +"&alarmascol=" + document.getElementById("alarmascol").value 
 +"&diasAntes=" + document.getElementById("diasAntes").value 
 +"&CertificadoFK=" + document.getElementById("CertificadoFK").value 
 +"&PagoFK=" + document.getElementById("PagoFK").value 
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
<td>${valor.idalarmas}</td>         
<td>${valor.alarmascol}</td>         
<td>${valor.diasAntes}</td>         
<td>${valor.CertificadoFK}</td>         
<td>${valor.PagoFK}</td>         
        </tr>                                                               
        `                                                                   
    }                                                                       
    $("#Table tr").on("click", function () {                                
 let datoidalarmas = $(this).find("td:nth-child(1)").html(); $("#idalarmas").val(datoidalarmas);  
 let datoalarmascol = $(this).find("td:nth-child(2)").html(); $("#alarmascol").val(datoalarmascol);  
 let datodiasAntes = $(this).find("td:nth-child(3)").html(); $("#diasAntes").val(datodiasAntes);  
 let datoCertificadoFK = $(this).find("td:nth-child(4)").html(); $("#CertificadoFK").val(datoCertificadoFK);  
 let datoPagoFK = $(this).find("td:nth-child(5)").html(); $("#PagoFK").val(datoPagoFK);  
    });                                                                     
}                                                                           
function cancelar() {                                                       
 document.getElementById("idalarmas").value = ""; 
 document.getElementById("alarmascol").value = ""; 
 document.getElementById("diasAntes").value = ""; 
 document.getElementById("CertificadoFK").value = ""; 
 document.getElementById("PagoFK").value = ""; 
    location.reload();                                                      
}                                                                           
$("#Table tr").on("click", function () {                                    
 let datoidalarmas = $(this).find("td:nth-child(1)").html(); $("#idalarmas").val(datoidalarmas);  
 let datoalarmascol = $(this).find("td:nth-child(2)").html(); $("#alarmascol").val(datoalarmascol);  
 let datodiasAntes = $(this).find("td:nth-child(3)").html(); $("#diasAntes").val(datodiasAntes);  
 let datoCertificadoFK = $(this).find("td:nth-child(4)").html(); $("#CertificadoFK").val(datoCertificadoFK);  
 let datoPagoFK = $(this).find("td:nth-child(5)").html(); $("#PagoFK").val(datoPagoFK);  
});                                                                        
