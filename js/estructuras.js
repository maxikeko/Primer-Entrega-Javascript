//variables const boolean 

//pido disculpas con los acentos no suelo ponerlos

//Declaramos variables
let entrada;
let nota;
let siOno;




do
{
    entrada = prompt ("¿Que estructura le gustaria probar? \n1.IF \n2.IF..Else \n3.For \n4.While \n5.Do..While \n\n6.Salir \n(Ademas recordar que esto es un SWITCH)");

//si es un numero entra en las opciones, sino vuelve a pedir un numero y ademas tiene que ser numeros del 1 al 5
while((!parseInt(entrada)) || ((entrada>6)||(entrada<1)))
{
        alert("La opcion ingresada no es una opcion valida, ingrese solo el numero correspondiente");
        entrada = prompt ("¿Que estructura le gustaria probar? \n1.IF \n2.IF..Else \n3.For \n4.While \n5.Do..While \n\n6.Salir \n(Ademas recordar que esto es un SWITCH)");    
}
if(entrada==6)
{
    break;
}
//estructura switch
switch (entrada)
{
    case "1":
        alert("Usted ha elegido la opcion 'IF' ");
        nota = prompt ("¿Que nota le pondria a este alumno del 1 al 10?")
        if(nota!=10)
        {
            alert("Encontramos un fallo en su opcion, no se preocupe el programa autocorrige a un 10");
        }
        alert("Gracias por ponerme un 10!!")
        break;


    case "2":
        alert("Usted ha elegido la opcion 'IF..ELSE' ");
        siOno= prompt("¿Recuerda el nombre de este alumno? \n(No vale revisar en Coderhouse o github)\n\n1.SI \n2.NO")
        while((!parseInt(siOno)) || ((entrada>2)||(entrada<1)))
        {
            siOno= prompt("Incorrecto,solo el numero, ingrese 1 para SI o 2 para NO ")
        }
        
        if(siOno==1)
        {
            let nombre = prompt ("Escriba el nombre y el apellido del alumno. \n(todo en minusculas)")
            if(nombre=="maximiliano bertoli")
            {
                alert("Es correcto!, muchas gracias por recordar mi nombre!");
            }
            else
            {
                alert("Es incorrecto, mi nombre es Maximiliano Bertoli, por favor no se lo olvide! :)")
            }
        }
        else{
            alert("No se preocupe, yo se lo recuerdo, mi nombre es Maximiliano Bertoli :)")
        }

        break;


    case "3":
        alert("Usted ha elegido la opcion 'FOR' ");
        
        nota= prompt("¿Que tal le está pareciendo el programa hasta ahora? \n(Del 1 al 10)");
        for(let i=1;i<5;i++)
        {
            nota=nota*10;
            alert("De la escala del 1 al "+i*10+ " su nota fue un "+nota);
        }
        alert("Wow muchas gracias, no me imaginaba que le gustara tanto!");
        break;


    case "4":
        alert("Usted ha elegido la opcion 'WHILE' ");
        let respuesta = prompt("Con total sinceridad y libre expresión, ¿va a aprobar a este alumno? \n1.Si \n2.No")
        while(respuesta!=1)
        {
            respuesta = prompt("Con total sinceridad y libre expresión, ¿va a aprobar a este alumno? \n1.Si \n2.No \n\n(no se va a ir de aqui hasta que elija la opcion correcta)")
        }
        alert("Muchas gracias, me alegro que sus decisiones sean autenticas y que no sean influenciadas por nadie!")
        break;


    case "5":
        alert("Usted ha elegido la opcion 'DO..WHILE' ");
        let recordar;
        do{
            alert("Estas son algunas razones por las cuales Maximiliano Bertoli deberia estar aprobado");
            alert("Esta web va como un rayo.");
            alert("Como 'programa' estoy muy contento con mi creador.");
            alert("Ademas de las estructuras elegidas, hay mas estructuras en el codigo ocultas(como un do..while gigante que envuelve todo el codigo para salir con el numero 6");
            alert("Aunque es muy dificil de percibir, hubo ligeras modificaciones en tus respuestas para brindarle una mejor experiencia.");
            alert("Estas son algunas de las razones por las cuales deberia aprobar a Maximiliano Bertoli.");
            recordar= prompt("¿Le gustaria ver las razones nuevamente? \n1.No \n2.Si, aunque iba a aprobarlo igualmente \n\n(elija 1 para salir)");


        }while(recordar != 1)

        break;    
    

}





}while(entrada!=6)
    alert("Muchas gracias por usar este programa!, Hasta pronto.")