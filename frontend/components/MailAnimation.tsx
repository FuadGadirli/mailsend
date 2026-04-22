'use client'

export default function MailAnimation() {
  return (
    <div className="floating-mail perspective w-full h-full flex items-center justify-center">
      {/* Outer envelope */}
      <div className="relative w-80 h-56 bg-gradient-to-b from-white to-slate-100 rounded-lg shadow-2xl glow"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top flap */}
        <div
          className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-slate-200 to-slate-100 rounded-t-lg"
          style={{
            transformOrigin: 'top',
            animation: 'flapOpen 3s ease-in-out infinite',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ✉️
              </div>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute top-24 left-0 right-0 bottom-0 p-6 flex flex-col justify-end bg-gradient-to-b from-transparent via-slate-50 to-white rounded-b-lg">
          <div className="space-y-2">
            <div className="h-2 bg-gradient-to-r from-indigo-300 to-transparent rounded"></div>
            <div className="h-2 bg-gradient-to-r from-purple-300 to-transparent rounded w-4/5"></div>
            <div className="h-2 bg-gradient-to-r from-blue-300 to-transparent rounded w-3/5"></div>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-20 bg-gradient-to-b from-white to-transparent transition-opacity duration-300"></div>
      </div>

      <style jsx>{`
        @keyframes flapOpen {
          0%,
          100% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(25deg);
          }
        }
      `}</style>
    </div>
  )
}
