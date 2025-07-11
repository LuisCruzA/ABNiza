import Link from 'next/link';
import BotonNivel from '@/app/ui/BotonNivel';

const niveles = Array.from({ length:2},(_, i)=> `nivel-${i+1}`)

export default function PlayPage() {
    return (
      <div>
        <h1>Elige un nivel</h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          {niveles.map((nivel) => (
            <li key={nivel}>
              <Link href={`/estudiante/play/${nivel}`}>
                <BotonNivel label={nivel} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }