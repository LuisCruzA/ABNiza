import Nivel1 from '@/app/ui/niveles/Nivel1'
import Nivel2 from '@/app/ui/niveles/Nivel2'
import { ReactElement } from 'react'



export default async function NivelPage({ params }: { params: { ejercicioId: string } }) {
  // mapa que asocia el ID recibido con el componente correcto
  const niveles: Record<string, ReactElement> = {
    'nivel-1': <Nivel1 />,
    'nivel-2': <Nivel2 />,
   
  }

  const nivelElegido = niveles[params.ejercicioId] // ← aquí es donde sabe qué nivel mostrar

  return (
    <div>
      <h1>Nivel actual: {params.ejercicioId}</h1>
      {nivelElegido ? (
        nivelElegido
      ) : (
        <p>Nivel no encontrado</p>
      )}
    </div>
  )
}
