<?php

	#$driver = new mysqli('localhost', 'cc409_user106', 'bNLQSfu005', 'cc409_user106');
	/*$driver = new mysqli('localhost', 'root', 'root','cc409_user106');
	if($driver->connect_errno){
		die("no se pudo cnectar");
	}*/
	
	
	/*recibir variables de la url*/
	switch($_GET["ctl"]){
		case "alumno":
			/*cargo el controlador*/
			require_once("controlador/alumnoCtl.php");
			$ctl = new AlumnoCtl();
			break;
		case "ciclo":
			require_once("controlador/nuevoCicloCtl.php");
			$ctl = new NuevoCicloCtl();
			break;
		default:
			
	}

/*...*/


$ctl->ejecutar();

?>