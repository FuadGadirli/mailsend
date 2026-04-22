import { Mail, Users, BarChart3 } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: 'Qeydiyyat',
      description: 'Sadəcə email və şifrə ilə başlayın. Şirkətiniz üçün hesab yaradın.',
    },
    {
      icon: Mail,
      title: 'Kontaktları Əlavə Edin',
      description: 'CSV faylı yükləyin və ya manual olaraq email ünvanları əlavə edin.',
    },
    {
      icon: BarChart3,
      title: 'Mail Göndərin',
      description: 'Güclü editor ilə kampaniya yaradın və real-time raporlama alın.',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Necə işləyir?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mailsend sadə, güclü və tez. Üç addımda başlayın.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="fade-in-up bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-indigo-500 transition group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
