let boton = document.getElementById('boton')
boton.addEventListener('click',()=>{
		let nombre = document.getElementById('nombre').value
        let dinero = document.getElementById('cdinero').value
        let opciones = document.getElementById('opciones').value
        let Suma=0,Resta=0, salir=0, monto=0;

        salir = confirm("comenzar");
        let contador = 0;
        while (salir==true) {

        let maquina=Math.floor(Math.random() * 2)+1;
          
        monto = prompt("Ingrese la cantidad de dinero que quiere apostar")
               monto = parseInt(monto)
              alert(`La cantidad que ha apostado es : $${(monto)}`);

            	console.log(parseInt(maquina))

               

                if (opciones==parseInt(maquina)){
                    alert("Felicidades " +nombre+ " usted ha ganado, la opcion de la maquina fue: "+maquina+ " \n");
                    Suma = Suma+monto;
                alert(`La cantidad de dinero que ha sumado es: ${parseInt(Suma)}`);
                
                }

                else{
                    alert(":( Perdiste " + nombre + " intentalo de nuevo , la opcion de la maquina fue: "+maquina );
                    Resta= Resta-Suma;
                alert(`La cantidad de dinero que tiene acumulado hasta ahora es:  ${parseInt(Resta)}`);
               
                }
              salir = confirm("Deseas continuar con el juego");

               if(salir==true){
                   
               }
               contador = contador+1
             }
             alert("Número de partidas que jugó: "+contador)
             }
             
            )


            
            let boton2 = document.getElementById('boton2')
            boton2.addEventListener('click',()=>{
                    
                Swal.fire({
                    //text: '<b>1.</b> dar click en el botón de lanzar moneda\n2. luego de que la moneda gire vas a dar click en el botón de iniciar el juego',
                    html: '<b>Ya estás listo para jugar :) Ahora da click en el botón de iniciar juego, buena suerte</b>',
                   icon: 'success'
                   // confirmButtonText:
                   // footer:
                   // width:
                   // padding:
                   // grow:
                   // backdrop:
                   // timer:
                   // timerProgressBar:
                   // toast:
                   // position:
                   // allowOutsideClick:
                   // allowEscapeKey:
                   // allowEnterKey:
                   // stopKeydownPropagation:
               
                   // input:
                   // inputPlaceholder:
                   // inputValue:
                   // inputOptions:
                   
                   //  customClass:
                   // 	container:
                   // 	popup:
                   // 	header:
                   // 	title:
                   // 	closeButton:
                   // 	icon:
                   // 	image:
                   // 	content:
                   // 	input:
                   // 	actions:
                   // 	confirmButton:
                   // 	cancelButton:
                   // 	footer:	
               
                   // showConfirmButton:
                   // confirmButtonColor:
                   // confirmButtonAriaLabel:
               
                   // showCancelButton:
                   // cancelButtonText:
                   // cancelButtonColor:
                   // cancelButtonAriaLabel:
                   
                   // buttonsStyling:
                   // showCloseButton:
                   // closeButtonAriaLabel:
               
               
                   // imageUrl:
                   // imageWidth:
                   // imageHeight:
                   // imageAlt:
               });
               
               
                         }
                         
                        )
            
                        
                    