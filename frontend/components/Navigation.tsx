import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Mailsend
          </span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-300 hover:text-white transition">
            Xüsusiyyətlər
          </a>
          <a href="#why" className="text-slate-300 hover:text-white transition">
            Niyə Mailsend?
          </a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">
            Qiymətlər
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-slate-300 hover:text-white transition"
          >
            Giriş
          </Link>
          <Link
            href="/register"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            Başla
          </Link>
        </div>
      </div>
    </nav>
  )
}
