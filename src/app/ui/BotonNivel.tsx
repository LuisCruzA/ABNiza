'use client'

export default function BotonNivel({ label }: { label: string }) {
  return (
    <button className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
      {label.toUpperCase()}
    </button>
  )
}
