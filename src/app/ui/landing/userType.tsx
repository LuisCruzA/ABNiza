
import Image from "next/image"
export default function User (){


return(

<div className="border-t border-amber-200 bg-amber-200
 flex  flex-col  items-center  px-4 py-20 h-[700px]">

<h2 className="text-black text-4xl font-bold text-center mb-10">
        ¿Para quién es?
        </h2>

        <div className="flex flex-row mt-5 w-full">
    <div className="flex flex-col items-center gap-5  max-w-md mx-auto">
    <Image  
        
        src="/imagenes/maestro.png"
        alt="pato"
        width={200}
        height={100}
        className="  w-47 h-56 rounded-lg shadow-md  "
        />
       <h2 className="text-black text-3xl font-bold">
        Docente
        </h2>

        <p className="text-lg text-left leading-relaxed break-words">Lleva el seguimiento del aprendizaje de tus alumnos en tiempo real. Asigna ejercicios personalizados, revisa su progreso y apóyalos con herramientas diseñadas para facilitar la enseñanza de lectoescritura de forma divertida.</p>
</div>

<div  className="flex flex-col items-center gap-5 max-w-md mx-auto ">
<Image 
        
        src="/imagenes/alumno.png"
        alt="pato"
        width={200}
        height={100}
        className=" rounded-lg shadow-md  "
        />
<h2 className="text-black text-3xl font-bold">
Estudiante      
  </h2>

  <p className="text-lg text-left leading-relaxed break-words">Aprende jugando a través de niveles interactivos llenos de color y retos. Cada ejercicio está pensado para ayudarte a desarrollar habilidades de lectoescritura mientras te diviertes.</p>
</div>
</div>


</div>

)

}