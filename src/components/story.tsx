import React from 'react'

const Story = () => {
  return (
    <div>
                    {/* BRAND STORY SECTION */}
      <section id="story" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-emerald-900 to-black flex justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Beyond Adornment
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-emerald-600 to-amber-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Story Cards */}
            <div className="p-6 rounded-lg bg-linear-to-br from-emerald-900 to-white border border-emerald-200">
              <h3 className="text-2xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="text-2xl">🧵</span> Healing Through Making
              </h3>
              <p className="text-gray-700">
                Each piece is crafted with intention as a tool for transformation, connecting maker and wearer in shared ritual.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-linear-to-br from-emerald-900 to-white border border-amber-200">
              <h3 className="text-2xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="text-2xl">📖</span> Story Over Perfection
              </h3>
              <p className="text-gray-700">
                Imperfections become beauty. Every knot, every stitch, is a mark of authenticity and human presence.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-linear-to-br from-emerald-900 to-white border border-red-200">
              <h3 className="text-2xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span> Community & Care
              </h3>
              <p className="text-gray-700">
                Safe spaces for creative expression, ancestral remembrance, and collective healing woven into every circle.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-lg shadow-lg">
            <p className="text-white text-xl sm:text-2xl italic leading-relaxed">
              "Soul Woven Rising Xpressions is more than adornment. Each piece is a thread of memory, resilience, and becoming—handcrafted with intention for those who wear their story on the outside. Through making and wearing, we honor heritage, claim healing, and express the fullness of who we are."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Story