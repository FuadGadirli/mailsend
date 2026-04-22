'use client'

import Navigation from '@/components/Navigation'
import MailAnimation from '@/components/MailAnimation'
import FeaturesSection from '@/components/FeaturesSection'
import WhySection from '@/components/WhySection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-in-left space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-indigo-300 text-sm font-medium">
                🚀 Başlanğıc üçün Pulsuz
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Email Marketing{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Yeni Nivoya
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Mailsend ilə sənin email kampaniyalarını avtomatlaşdır, trakların et və biznes böyüt. Sadə, güclü və tez.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                  10K+
                </div>
                <p className="text-sm text-slate-400">İstifadəçi</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  1B+
                </div>
                <p className="text-sm text-slate-400">Email Göndərildi</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text">
                  99.9%
                </div>
                <p className="text-sm text-slate-400">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Animation */}
          <div className="slide-in-right h-96">
            <MailAnimation />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Why Section */}
      <WhySection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
