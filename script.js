
var plano=document.getElementById('plano-cartesiano');
var c = plano.getContext("2d");
c.lineWidth=.1;
var Xreal;
var Yreal;
var  PuntoX;
var PuntoY;
var Y;
var X;
var escalaOriginal=10;
var Grados=0;
var ban=true;
var aux;
function figura(){
   X = prompt("Selecciona una cordenada X");
  Y = prompt("Selecciona una cordenada Y");

   Xreal=X*20;
   Yreal=Y*20;
   PuntoX= 300+Xreal;
   PuntoY= 300+(Yreal);

      c.fillStyle="red";
   c.fillRect(PuntoX,PuntoY,escalaOriginal,escalaOriginal);
}

function limpiar(){
c.clearRect(0, 0, plano.width, plano.height) //limpiamos la figura anterior
}

function Accion(Ac,bandera){

  switch (Ac) {
    case 1: //trasladar
    X = prompt("Selecciona una cordenada para trasladar X");
    Y = prompt("Selecciona una cordenada trasladar Y")
    Xreal=X*20;
    Yreal=Y*20;
    PuntoX= 300+Xreal;
    PuntoY= 300-Yreal;

        c.clearRect(0, 0, plano.width, plano.height);
        c.fillStyle="red";
        c.fillRect(PuntoX,PuntoY,escalaOriginal,escalaOriginal);
        Accion(2,false);
     break;

    case 2:
    if(bandera){
      Grados = prompt("Cuantos Grados quieres rotar");
    }
      c.save();
     c.clearRect(0, 0, plano.width, plano.height)
       c.translate(PuntoX,PuntoY);
      c.rotate( Grados*Math.PI/180 );
      c.translate(-(PuntoX),-(PuntoY));
      c.fillRect(PuntoX,PuntoY,escalaOriginal,escalaOriginal);
      c.restore();

     break
    case 3:

      var escala=prompt("Dame una escala x:");
      c.clearRect(0, 0, plano.width, plano.height);
      escalaOriginal*=escala;
      c.fillRect(PuntoX,PuntoY,escalaOriginal,escalaOriginal);
        Accion(2,false);


    break;
    default:

  }
}
