export default function WhySection() {
  const reasons = [
    {
      title: 'Ucuz və Etkili',
      description: 'Başlanğıc üçün pulsuz, əlavə xüsusiyyətlər üçün uyğun fiyatlar.',
    },
    {
      title: 'Azərbaycan Dilinə Dəstək',
      description: 'Hamısı Azərbaycan dilində, lokal dəstək ve dekadasının.',
    },
    {
      title: 'Güclü Analitika',
      description: 'Real-time raporlama, açılış faizləri, click tracking.',
    },
    {
      title: 'Tez Texniki Dəstək',
      description: 'Sual, problem? Biz buradayıq sənə kömək etmək üçün.',
    },
    {
      title: 'Avtomatlaşdırma',
      description: 'Kampaniyaların avtomatik göndərülməsini qur.',
    },
    {
      title: 'Təhlükəsizlik',
      description: 'Sənin datalar şifrələnmiş və təhlükəsiz.',
    },
  ]

  return (
    <section id="why" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Niyə Mailsend Creads?
          </h2>
          <p className="text-slate-400 text-lg">
            Binlərlə şirkət Mailsend-ə güvənir
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:border-indigo-500/50 transition"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-slate-400 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
