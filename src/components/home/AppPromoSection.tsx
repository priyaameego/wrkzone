import React from "react";

export function AppPromoSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-fb8500 opacity-95" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 right-20 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />

        <div className="relative z-10 px-6 sm:px-12 py-20 sm:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/30 to-white/10 rounded-full text-sm font-bold mb-8 ring-1 ring-white/40 text-white backdrop-blur-sm hover:from-white/40 hover:to-white/20 transition-all">
                <span className="text-lg animate-bounce">📱</span>
                <span>Download Our Mobile App</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight font-serif">
                Take{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-fb8500 bg-clip-text text-transparent">
                  WrkZone
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text">
                  In Your Pocket
                </span>
              </h2>

              <p className="text-lg text-white/90 mb-10 leading-relaxed font-medium">
                Never miss a job opportunity. Book services instantly, get real-time updates, and manage everything from our powerful mobile app—available on iOS and Android.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/40 transition-all hover:scale-105 transform hover:-translate-y-1">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold text-white text-sm">Instant Booking</div>
                  <div className="text-xs text-white/70">In seconds</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/40 transition-all hover:scale-105 transform hover:-translate-y-1">
                  <div className="text-3xl mb-2">🔔</div>
                  <div className="font-bold text-white text-sm">Live Alerts</div>
                  <div className="text-xs text-white/70">Real-time updates</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/40 transition-all hover:scale-105 transform hover:-translate-y-1">
                  <div className="text-3xl mb-2">📍</div>
                  <div className="font-bold text-white text-sm">Find Nearby</div>
                  <div className="text-xs text-white/70">Professionals near you</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/40 transition-all hover:scale-105 transform hover:-translate-y-1">
                  <div className="text-3xl mb-2">💬</div>
                  <div className="font-bold text-white text-sm">Direct Chat</div>
                  <div className="text-xs text-white/70">Instant messaging</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-white to-yellow-50 text-blue-900 font-bold hover:shadow-2xl hover:shadow-white/20 transition-all shadow-lg hover:scale-110 flex items-center justify-center gap-3 relative overflow-hidden"
                  href="https://apps.apple.com"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  <span className="text-xl">🍎</span>
                  <span className="relative">App Store</span>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/20 text-white font-bold hover:from-blue-400/50 hover:to-cyan-400/40 ring-2 ring-white/50 transition-all backdrop-blur-sm flex items-center justify-center gap-3 hover:scale-110"
                  href="https://play.google.com"
                >
                  <span className="text-xl">🔵</span>
                  <span>Google Play</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Phone Mockup */}
            <div className="hidden md:flex justify-center items-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 via-fb8500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/30 to-fb8500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-blue-950 to-black rounded-3xl p-3 w-80 h-96 shadow-2xl border border-white/10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />
                  <div className="w-full h-full bg-gradient-to-b from-blue-900 via-blue-800 to-black rounded-2xl flex flex-col items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-fb8500/20 via-transparent to-transparent" />
                    <div className="relative z-10 text-center">
                      <div className="text-7xl mb-6 animate-bounce">📲</div>
                      <div>
                        <p className="text-white font-extrabold text-2xl mb-2">WrkZone</p>
                        <p className="text-white/80 text-sm font-medium">Your work companion</p>
                      </div>
                      <div className="mt-8 flex gap-2 justify-center">
                        <div className="w-1 h-12 bg-gradient-to-t from-fb8500 to-yellow-300 rounded-full animate-pulse" />
                        <div className="w-1 h-16 bg-gradient-to-t from-fb8500 to-yellow-300 rounded-full animate-pulse delay-100" />
                        <div className="w-1 h-10 bg-gradient-to-t from-fb8500 to-yellow-300 rounded-full animate-pulse delay-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
