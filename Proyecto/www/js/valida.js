
exprCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
exprCiclo = /^\d\d\d\d[A,B,a,b]$/;
exprFecha = /^\d{2}\/\d{2}\/\d{4}$/; 

/*validación registro nuevo alumno*/
function validaFormularioRegistro() {
	var form = document.getElementById("registro");
	
	if (validaNumero(form.codigo.value) == "") {
		muestraError(form.codigo,"Ingresa un código válido");
		return 0;
	} else if (trim(form.nombre.value) == "") {
		muestraError(form.nombre,"Ingresa un nombre");
		return 0;
	}
	else if (trim(form.ap.value) == "") {
		muestraError(form.ap,"Ingresa un apellido");
		return 0;
	}
	else if (trim(form.carrera.value) == "") {
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

function validaArchivo(){
	inp = document.getElementById('archivo');
	if(inp.value==''){
		muestraError(inp,"Selecciona una archivo a subir");
		return 0;
	}else{
		document.getElementById("formulario").submit();
	}
}

function validaFormularioNuevoMaestro(){
	var form = document.getElementById("registro");
	
	if (trim(form.nombre.value) == "") {
		muestraError(form.nombre,"Ingresa un nombre");
		return 0;
	}
	else if (trim(form.ap.value) == "") {
		muestraError(form.ap,"Ingresa un apellido");
		return 0;
	} else if (!exprCorreo.test(form.correo.value)) {
		muestraError(form.correo,"Ingresa un email válido");
		return 0;
	}
	else {
		form.submit();
	}
}

function validaBusqueda(){
	var doc = document.getElementById('busqueda');
	if(doc.value == ''){
		muestraError(doc,"Ingresa algo para buscar");
		return 0;
	}else{
		document.getElementById('buscar').submit();
	}

}
/*Validación cambio de contraseña*/
function validaCambioContrasena(){
	var form = document.getElementById("registro");
	//alert(form.actual.value);
	
	if (trim(form.actual.value) == "") {
		muestraError(form.actual,"Ingresa la contraseña actual");
		return 0;
	}
	else 
	if (trim(form.nueva.value) == "") {
		muestraError(form.nueva,"Ingresa la nueva contraseña");
		return 0;
	}else
	if(form.nueva.value.length < 8){
		muestraError(form.nueva,"Longitud mínima de 6 cararacteres");
		return 0;
	}
	else 
	if(!exprCorreo.test(form.email.value)){
		muestraError(form.email,"Formato de email inválido");
		return 0;
	}else{
		form.submit();
	}
}

/*validación del login*/
function validaLogin() {
	var form = document.getElementById("login");
	
	if (validaNumero(trim(form.codigo.value)) == "") {
		muestraError(form.codigo,"Ingresa tu código");
		return 0;
	} else if (trim(form.con.value) == "") {
		muestraError(form.con,"Ingresa tu contraseña");
		return 0;
	}else{
		var ps = document.getElementById('con');
		ps.value = sha1(ps.value);
		form.submit();
	}	
}


function errorLogin(){
	var form = document.getElementById("login");
	muestraError(form.codigo,"Tus datos son inválidos");
	return 0;
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
	
	var fecha_ini = form.fecha_inicio.value.split('/');
	var inicio = new Date();
	inicio.setFullYear(fecha_ini[2],fecha_ini[1],fecha_ini[0]);
	var fecha_fin = form.fecha_fin.value.split('/');
	var fin = new Date();
	fin.setFullYear(fecha_fin[2],fecha_fin[1],fecha_fin[0]);	
	
	if(fin <= inicio){
		muestraError(form.fecha_inicio,"La fecha de fin es inferior a la de inicio");
		return 0; 
	}
	
	/*for (i=0;i<fechas.length;i++) {
		if (!fechas[i].value.match(exprFecha)) {
			muestraError(fechas[i],"Formato de fecha inválido");
			return 0;
		}
	if (trim(motivos[i].value)=="") {
			muestraError(motivos[i],"Debe indicar la causa de la suspesión");
			return 0;
		}
	}*/
	form.submit();	
}


function validaClonarCiclo(){
	var form = document.getElementById("ciclo");
	if (form.nombre_clonado.value=='' || form.nombre_clonado.value=='Selecciona una ciclo') {
		muestraError(form.nombre_clonado,"Selecciona el ciclo a clonar");
		return 0;
	}else{
		validaNuevoCiclo();
	}
}

function validaNuevoCurso(){
	var form = document.getElementById("formulario");
	var dias='';
	var d = $("input:checkbox:checked");
	$("input:checkbox:checked").each(function(){
		dias+=$(this).val()+','
	});
	form.dias.value = dias;
	var hia = form.hi.value.split(':');
	var hi = parseInt(hia[0]);
	var hfa = form.hf.value.split(':');
	var hf = parseInt(hfa[0]);
	
	if (trim(form.nombre.value)=='') {
		muestraError(form.nombre,"Ingresa el nombre del curso");
		return 0;
	}else if (form.academia.value=='' || form.academia.value=='Selecciona una academia') {
		muestraError(form.academia,'Selecciona la academia a la que pertenecerá el curso');
		return 0;
	}else if (form.ciclo.value=='' || form.ciclo.value=='Selecciona un ciclo') {
		muestraError(form.ciclo,'Selecciona el ciclo escolar');
		return 0;
	}else if(d.length <= 0) {
		muestraError(form.ciclo,'Debes seleccionar por lo menos un día');
		return 0;
	}else if(hi>= hf) {
		muestraError(form.ciclo,'La hora de inicio debe ser inferior a la de fin');
		return 0;
	}else{
		form.submit();
	}
}


contadorEvaluaciones = 1;


function validaConfiguracionEvaluacion(){


}

function activaHojasExtra(){
	var capa = document.getElementById("hojaExtra1");
	var ch = document.getElementById("he1");
	if(ch.checked)
		capa.setAttribute("style","display:block;");
	else
		capa.setAttribute("style","display:none;");


}

function eliminaRubroEvaluacion(rubro){
	document.getElementById('contenedor').removeChild(rubro);
	contadorEvaluaciones--;
}

function nuevoRubroEvaluacion(){
	var contenedor = document.getElementById("contenedor");
	var original = document.getElementById("rubroEvaluacion");
	var ultimo = document.getElementById("fin-rubro");
	var rubro = original.cloneNode(true);
	rubro.setAttribute("style",'');
	rubro.setAttribute("id",'rubroEvaluacion'+contadorEvaluaciones);
	var close = rubro.childNodes[0].nextSibling;
	var label = close.nextSibling.nextSibling.childNodes[0].nextSibling;
	var inputRubro = close.nextSibling.nextSibling.childNodes[2].nextSibling;
	label.setAttribute("for","rubro"+contadorEvaluaciones);
	inputRubro.setAttribute("id","rubro"+contadorEvaluaciones);
	inputRubro.setAttribute("name","rubro"+contadorEvaluaciones);
	label.setAttribute("for","porcentaje"+contadorEvaluaciones);
	var divPorcentaje = rubro.childNodes[4].nextSibling;
	label = divPorcentaje.childNodes[0].nextSibling;
	label.setAttribute("for","porcentaje"+contadorEvaluaciones);
	var select = divPorcentaje.childNodes[2].nextSibling;
	select.setAttribute("id","porcentaje"+contadorEvaluaciones);
	select.setAttribute("name","porcentaje"+contadorEvaluaciones);


	close.setAttribute("onclick","eliminaRubroEvaluacion(document.getElementById('rubroEvaluacion"+contadorEvaluaciones+"'))");
	contenedor.insertBefore(rubro,ultimo);
	contadorEvaluaciones++;
}


/*axiliares---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/


function muestraError(elemento,cadena) {
	var error = document.getElementById("error");
	document.getElementById("text-error").innerHTML = cadena;
	error.setAttribute('class', 'errorV');
	if(elemento!=null)
		elemento.focus();
	setTimeout("error.setAttribute('class', 'errorI')", 3000);
}

function muestraNotificacion(cadena) {
	var notificacion = document.getElementById("notificacion");
	document.getElementById("text-notificacion").innerHTML = cadena;
	notificacion.setAttribute('class', 'notificacionV');
	setTimeout("notificacion.setAttribute('class', 'notificacionI')", 3000);
}

function cerrarError(){
	error.setAttribute('class', 'errorI');
}

function cerrarNotificacion(){
	error.setAttribute('class', 'notificacionI');
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

function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
	/*return this.replace(/^\s+|\s+$/g, '');*/
}

