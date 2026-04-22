import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Başlaya Hazırsın?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Heç bir kredit kartı tələb yoxdur. Sadəcə email ilə qeydiyyat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition shadow-lg"
          >
            Pulsuz Başla
          </Link>
          <Link
            href="#"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
          >
            Demo Izləyin
          </Link>
        </div>
      </div>
    </section>
  )
}
