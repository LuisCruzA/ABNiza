'use client'

export default function Benefits() {
  return (
    <div className="flex flex-col items-center  bg-amber-200 border-t border-amber-200 px-4 py-40 h-auto">
      <h2 className="text-black text-4xl font-bold text-center mb-16">
        Beneficios de usar ABNiza
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full px-6">

        <div className="flex flex-col items-center text-center">
          <span className="text-5xl mb-4">🧠</span>
          <h3 className="text-xl font-semibold mb-2">Aprendizaje Divertido</h3>
          <p className="text-lg">
            Juegos que convierten el aprendizaje en una experiencia emocionante y amigable para estudiantes.
          </p>
        </div>

        {/* Beneficio 2 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-5xl mb-4">👩‍🏫</span>
          <h3 className="text-xl font-semibold mb-2">Herramientas para docentes</h3>
          <p className="text-lg">
            Monitorea el progreso, asigna niveles y accede a reportes desde cualquier dispositivo.
          </p>
        </div>

        {/* Beneficio 3 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-5xl mb-4">🌐</span>
          <h3 className="text-xl font-semibold mb-2">100% Web</h3>
          <p className="text-lg">
            No requiere instalaciones. Accesible desde navegador en PC, tablet o móvil.
          </p>
        </div>

        {/* Beneficio 4 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-5xl mb-4">⚡</span>
          <h3 className="text-xl font-semibold mb-2">Fácil de usar</h3>
          <p className="text-lg">
            Interfaz intuitiva pensada para niños y docentes, sin necesidad de conocimientos técnicos.
          </p>
        </div>
      </div>
    </div>
  );
}
