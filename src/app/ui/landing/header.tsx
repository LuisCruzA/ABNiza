'use client'
import Image from "next/image"
import Button from "./button"
import Link from "next/link"


export default function Header(){

    return(

        <div className="border border-amber-100 bg-amber-50 flex  flex-row items-center justify-between  px-4 py-2">

           
           <Image
           src="/imagenes/abLogo.png"
            alt="logo"
            width={200}
            height={100}
            className="rounded-lg shadow-md ml-20 hover:scale-105 transition-transform duration-300"
           />

           <h1 id="header" className="text-black text-7xl font-bold mr-80 " >AB Niza</h1>
    <div className="flex gap-4 mr-20">
        <Link href={"/signin"}>
            <Button className="bg-amber-200 text-black font-bold rounded-full">

                    Iniciar sesión

            </Button>
            </Link>

            <Link href={"/signup"}>
            <Button className="bg-amber-500 text-white font-bold rounded-full" >

                    Registrarse
            </Button>
            </Link>

            </div>
        </div>


    )
        



    


}