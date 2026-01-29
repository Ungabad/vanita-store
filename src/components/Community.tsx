import React from 'react'

const Community = () => {
  return (
    <div>
                {/* COMMUNITY & HEALING SECTION */}
      <section id="community" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-emerald-900 to-black text-white flex justify-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join a Soul Woven Circle
          </h2>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting is more than a skill—it's a ritual. It's meditation. It's medicine. Join our community workshops and healing circles where we gather to create, connect, and care for ourselves and each other.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-linear-to-br from-emerald-900 to-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg border border-emerald-500 border-opacity-50 text-black">
              <h3 className="text-2xl font-bold mb-3">🌿 Workshops</h3>
              <p className="text-gray-900">Learn traditional and contemporary fiber art techniques from skilled artisans.</p>
            </div>

            <div className="bg-linear-to-br from-emerald-900 to-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg border border-emerald-500 border-opacity-50 text-black">
              <h3 className="text-2xl font-bold mb-3">💫 Healing Circles</h3>
              <p className="text-gray-900">Safe spaces to create, share stories, and find community in our shared becoming.</p>
            </div>

            <div className="bg-linear-to-br from-emerald-900 to-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg border border-emerald-500 border-opacity-50 text-black">
              <h3 className="text-2xl font-bold mb-3">🎨 Mentorship</h3>
              <p className="text-gray-900">One-on-one guidance from experienced makers to deepen your practice.</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
          >
            Learn About Our Programs
          </a>
        </div>
      </section>
      </div>
  )
}

export default Community