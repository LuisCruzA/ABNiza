import Button from "./button"
import Image from "next/image"
export default function Hero(){



    return(

<div className=" bg-gradient-to-b from-amber-50 to-amber-200
 flex flex-row  justify-between px-4 py-2 h-[500px]">

        <div className="flex flex-col    w-1/2  break-words px-8 py-14">
        <h2 className="text-black text-4xl font-bold">
            Aprender nunca fue tan divertido
        </h2>
       <br />
        <p className="text-2xl ">Una app educativa interactiva que combina bloques físicos con tecnología RFID para que niños de preescolar y primaria descubran letras, formen palabras y aprendan mientras se divierten. ¡Todo mediante actividades lúdicas, táctiles y digitales!</p>
        
        </div>
        
        <div className="flex flex-col  justify-center w-1/2">


        <Image 
        
            src="/imagenes/pato1.png"
            alt="pato"
            width={200}
            height={100}
            className="rounded-lg shadow-md ml-72 hover:scale-105 transition-transform duration-300 "
            />


        
        <Button className=" bg-amber-500 text-white text-2xl font-bold rounded-full px-12 py-8 ml-64 mt-9 w-fit " >

        Comenzar ahora

        </Button>
        </div>
</div>


    )
}