
exprCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
exprCiclo = /^\d\d\d\d[A,B,a,b]$/;
exprFecha = /^\d{2}\/\d{2}\/\d{4}$/; 

/*validación registro nuevo alumno*/
function validaFormularioRegistro() {
	var form = document.getElementById("registro");
	
	if (validaNumero(form.codigo.value) == "") {
		muestraError(form.codigo,"Ingresa un código válido");
		return 0;
	} else if (form.nombre.value == "") {
		muestraError(form.nombre,"Ingresa un nombre");
		return 0;
	}
	else if (form.ap.value == "") {
		muestraError(form.ap,"Ingresa un apellido");
		return 0;
	}
	else if (form.carrera.value == "") {
		muestraError(form.carrera,"Ingresa una carrera");
		return 0;
	}
	else if (!exprCorreo.test(form.correo.value)) {
		muestraError(form.correo,"Ingresa un email válido");
		return 0;
	}
	else {
		form.submit();
	}
}

/*validación del login*/
function validaLogin() {
	var form = document.getElementById("login");
	
	if (form.us.value == "") {
		muestraError(form.us,"Ingresa tu nombre de usuario");
		return 0;
	} else if (form.con.value == "") {
		muestraError(form.con,"Ingresa tu contraseña");
		return 0;
	}else{
		var ps = document.getElementById('con');
		ps.value = sha1(ps.value);
		form.submit();
	}	
}

/*validación para recuperar contraseña*/
function validaRecuperarContrasena() {
	var form = document.getElementById("rc");
	if (!exprCorreo.test(form.email.value)) {
		muestraError(form.email,"Ingresa una cuenta de correo válida");
		return 0;
	} else{
		form.submit();
	}	
}

/*validación para nuevo ciclo*/
function validaNuevoCiclo() {
	var form = document.getElementById("ciclo");
	var fechas = document.getElementsByClassName("fecha");
	var motivos = document.getElementsByClassName("motivo");
	if (!exprCiclo.test(form.nombre.value)) {
		muestraError(form.nombre,"Ingresa un nombre válido para el ciclo con el formato adecuado");
		return 0;
	} else if (!form.fecha_inicio.value.match(exprFecha)) {
		muestraError(form.fecha_inicio,"Formato de fecha inválido");
		return 0; 
	}else if (!form.fecha_fin.value.match(exprFecha)) {
		muestraError(form.fecha_fin,"Formato de fecha inválido");
		return 0; 
	}
	
	for (i=0;i<fechas.length;i++) {
		if (!fechas[i].value.match(exprFecha)) {
			muestraError(fechas[i],"Formato de fecha inválido");
			return 0;
		}
	if (motivos[i].value=="") {
			muestraError(motivos[i],"Debe indicar la causa de la suspesión");
			return 0;
		}
	}
	form.submit();	
}

function muestraError(elemento,cadena) {
	var error = document.getElementById("error");
	document.getElementById("text-error").innerHTML = cadena;
	error.setAttribute('class', 'errorV');
	elemento.focus();
	setTimeout("error.setAttribute('class', 'errorI')", 3000);
}

function cerrarError(){
	error.setAttribute('class', 'errorI');
}


function activaCelular(){
	var cel = document.getElementById('celular');
	cel.disabled = !cel.disabled;
}



function oculta() {
	var error = document.getElementById("error");
	for(i = 100; i >=0  ; i--){
		error.setAttribute('opacity',i);
		setInterval("",100);
	}
	//error.setAttribute('class', 'errorI');
}

function ocultaError() {
	var error = document.getElementById("error");
	error.setAttribute();
}

function pausecomp1(millis)
{
var date = new Date();
var curDate = null;

do { curDate = new Date(); }
while(curDate-date < millis);
} 

function pausecomp(ms) {
ms += new Date().getTime();
while (new Date() < ms){}
} 

function delay(milisegundos)
{
	for(i=0;i<=milisegundos;i++)
	{
		setTimeout('return 0',1);
	}
}

function validaNumero(numero) {
	var n = parseInt(numero);
	
	if (isNaN(n)) {
		return "";
	}else {
		return n;
	}

}