function insertar_certificados() {
    var r = confirm("Confirma??");
    if (r == true) {
        fetch("/certificados/insert_certificados", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "token=" + document.getElementById("token").value
                + "&idcertificados=" + document.getElementById("idcertificados").value
                + "&idAlumno=" + document.getElementById("idAlumno").value
                + "&fechaVencimiento=" + document.getElementById("fechaVencimiento").value
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
function update_certificados() {
    var r = confirm("Confirma??");
    if (r == true) {
        fetch("/certificados/update_certificados", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "token=" + document.getElementById("token").value
                + "&idcertificados=" + document.getElementById("idcertificados").value
                + "&idAlumno=" + document.getElementById("idAlumno").value
                + "&fechaVencimiento=" + document.getElementById("fechaVencimiento").value
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

function delete_certificados() {
    var r = confirm("Confirma??");
    if (r == true) {
        fetch("/certificados/delete_certificados", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "token=" + document.getElementById("token").value
                + "&idcertificados=" + document.getElementById("idcertificados").value
                + "&idAlumno=" + document.getElementById("idAlumno").value
                + "&fechaVencimiento=" + document.getElementById("fechaVencimiento").value
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
function select_certificados() {
    fetch("/certificados/select_certificados", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "token=" + document.getElementById("token").value
            + "&idcertificados=" + document.getElementById("idcertificados").value
            + "&idAlumno=" + document.getElementById("idAlumno").value
            + "&fechaVencimiento=" + document.getElementById("fechaVencimiento").value
            + "&fechaVencimientoDesde=" + document.getElementById("fechaVencimientoDesde").value
            + "&fechaVencimientoHasta=" + document.getElementById("fechaVencimientoHasta").value
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
<td>${valor.idcertificados}</td>         
<td>${valor.idalumno}</td>         
<td>${valor.fechavencimiento}</td>         
        </tr>                                                               
        `
    }
    $("#Table tr").on("click", function () {
        let datoidcertificados = $(this).find("td:nth-child(1)").html(); $("#idcertificados").val(datoidcertificados);
        let datoidAlumno = $(this).find("td:nth-child(2)").html(); $("#idAlumno").val(datoidAlumno);
        let datofechaVencimiento = $(this).find("td:nth-child(3)").html(); $("#fechaVencimiento").val(moment(datofechaVencimiento).format("YYYY-MM-DD"));
    });
}
function cancelar() {
    document.getElementById("idcertificados").value = "";
    document.getElementById("idAlumno").value = "";
    document.getElementById("fechaVencimiento").value = "";
    location.reload();
}
$("#Table tr").on("click", function () {
    let datoidcertificados = $(this).find("td:nth-child(1)").html(); $("#idcertificados").val(datoidcertificados);
    let datoidAlumno = $(this).find("td:nth-child(2)").html(); $("#idAlumno").val(datoidAlumno);
    let datofechaVencimiento = $(this).find("td:nth-child(3)").html(); $("#fechaVencimiento").val(moment(datofechaVencimiento).format("YYYY-MM-DD"));
});                                                                        
