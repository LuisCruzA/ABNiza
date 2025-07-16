'use client'
import Image from "next/image"
import Button from "./button"
export default function Header(){

    return(

        <div className="border border-amber-100 bg-amber-50 flex  flex-row items-center justify-between  px-4 py-2">

           
           <Image
           src="/imagenes/abLogo.png"
            alt="Descripción de la imagen"
            width={200}
            height={100}
            className="rounded-lg shadow-md ml-20 "
           />

           <h1 className="text-black text-7xl font-bold mr-80 " >Ab Niza</h1>
    <div className="flex gap-4 mr-20">
            <Button className="bg-amber-200 text-black font-bold rounded-full">

                    Iniciar sesión

            </Button>

            <Button className="bg-amber-500 text-white font-bold rounded-full" >

                    Registrarse
            </Button>

            </div>
        </div>


    )
        



    


}