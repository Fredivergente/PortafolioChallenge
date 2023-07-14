var submitButton = document.querySelector("formulario");


submitButton.addEventListener("click", function (event) {
    var name = document.querySelector("#nombre").value;
    
    var asunto = document.querySelector("#asunto").value;

    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    var email = document.querySelector("#correo").value;
    
    var msj = document.querySelector("#mensaje").value

	event.preventDefault();
    
	if(name == "" ){
        alert("Debe ingresar nombre completo");
        document.querySelector("#nombre").focus();
    }

    
    else if(anme.length < 10){
        alert("Debe ingresar nombres y apellidos válidos");
        document.querySelector("#nombre").focus();
    }

    else if(!emailRegex.test(email)){
        alert("Correo no válido");
        document.querySelector("#correo").focus();
    }

    else if(asunto == ""){
        alert("Debe ingresar un asunto de contacto");
        document.querySelector("#asunto").focus();
    }

    else if(asunto.length <= 10){
        alert("Debe ingresar asunto de mínimo 10 caracteres");
        document.querySelector("#asunto").focus();
    }

    else if(msj == ""){
        alert("Debe ingresar un mensaje de contacto");
        document.querySelector("#mensaje").focus();
    }

    else if(msj.length < 10 || pMensaje > 100){
        alert("El mensaje debe tener entre 10 y 100 caracteres");
        document.querySelector("#mensaje").focus();
    }

    else{
        document.querySelector("#nombre").value = "";
    
        document.querySelector("#asunto").value = "";
    
        document.querySelector("#correo").value = "" ;
    
        document.querySelector("#mensaje").value = "";
    }
});