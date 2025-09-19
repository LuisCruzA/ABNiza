import { ReactElement } from 'react'
import BotonEjercicio from '@/app/ui/ejercicios/botonEjercicio'
import NestedBlocks from '@/app/ui/ejercicios/nestedBlocks'

export default function Prueba() {
    return (

        //Background
    <div className = "bg-[url(/assets/Wallpaper/2.png)] bg-cover bg-center grid grid-rows-10 grid-cols-10 gap-1 h-screen w-screen">

        <div className = "col-span-9 row-span-2 flex items-center justify-center">
            <h2 className = "text-5xl text-center font-bold">Nivel 1</h2>
        </div>
        

        <div className = "col-span-1 row-span-2 flex items-center justify-center">
            <BotonEjercicio imagen = "/assets/Iconos/7.png" alt = "Salir "/>
        </div>

        <div className = "col-span-4 row-span-8 flex items-center justify-center">
            <img src = "/assets/Images/10.png" alt="Referencia" className="object-contain flex items-center justify-center" />
        </div>


        <div className = "col-span-2 row-span-2 flex items-center justify-end">
            <BotonEjercicio imagen = "/assets/Iconos/6.png" alt = "Audio" />
        </div>
        
        <div className = "col-span-4 row-span-2 flex items-center justify-center">
            <BotonEjercicio imagen = "/assets/Iconos/2.png" alt="Siguiente" basis="basis-[24rem]"/>
        </div>

        <div className="col-span-6 row-span-4">
            <NestedBlocks words={["P","E","L","O", "T", "A"]} />
        </div>

        <div className = "col-span-6 row-span-2">
            <h2 className = "text-5xl text-center">Completa el ejercicio</h2>
        </div>
    </div>
    )
}