export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg">Mailsend</span>
            </div>
            <p className="text-slate-400 text-sm">
              Azərbaycan\'ın ən güclü email marketing platforması.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Məhsul</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Xüsusiyyətlər</a></li>
              <li><a href="#" className="hover:text-white transition">Qiymətlər</a></li>
              <li><a href="#" className="hover:text-white transition">API</a></li>
              <li><a href="#" className="hover:text-white transition">Sənədləri</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Şirkət</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Haqqımızda</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Karyera</a></li>
              <li><a href="#" className="hover:text-white transition">Əlaqə</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Hüquqi</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Qaydalar</a></li>
              <li><a href="#" className="hover:text-white transition">Gizlilik</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition">Qeydiyyat</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Mailsend. Bütün hüquqlar qorunur.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Linkedin</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
