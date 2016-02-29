function deletePassDiv(){
	var passIn = document.getElementById("passIn");
	var log = document.getElementById("log");
  	log.className = "col-md-12";
  	var pass = document.getElementById("pass");
  	pass.parentNode.removeChild(pass);
  	var btn = document.getElementById("btn1");
	btn.setAttribute("href", "#about");
  	finalCountDown("log");
};

function finalCountDown(id){
  var log = document.getElementById("log");
  var fecha=new Date('2016','6','7','12','00','00')
  var hoy=new Date()
  var dias=0
  var horas=0
  var minutos=0
  var segundos=0

  if (fecha>hoy){
    var diferencia=(fecha.getTime()-hoy.getTime())/1000
    dias=Math.floor(diferencia/86400);
    diferencia=diferencia-(86400*dias);
    horas=Math.floor(diferencia/3600);
    diferencia=diferencia-(3600*horas);
    minutos=Math.floor(diferencia/60);
    diferencia=diferencia-(60*minutos);
    segundos=Math.floor(diferencia);

    log.innerHTML= '<span class="form-control">'+' Quedan: ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos' + '</span>';

    if (dias>0 || horas>0 || minutos>0 || segundos>0){
      setTimeout("finalCountDown(\"" + id + "\")",1000);
    };
  }else{
    log.innerHTML+='<span class="form-control">'+' Quedan: ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos' + '</span>';
  };
};
