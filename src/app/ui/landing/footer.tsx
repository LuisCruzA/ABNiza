'use client'

export default function Footer() {
  return (
    <footer className="border border-amber-100 bg-amber-50 flex text-black py-10 px-6 border-t ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Nombre del proyecto */}
        <div className="text-lg font-semibold">© 2025 ABNiza</div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">Sobre nosotros</a>
          <a href="#" className="hover:underline">Contacto</a>
          {/*<a href="#" className="hover:underline">Términos</a>*/}
      </div>
      </div>
    </footer>
  );
}
