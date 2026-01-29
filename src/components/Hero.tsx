import React from 'react'

const Hero = () => {
  return (
    <div>
              {/* HERO SECTION */}
      <section className="w-full pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-emerald-900 to-black text-white min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* Decorative Element */}
          <div className="mb-8 flex justify-center">
            <div className=" flex items-center justify-center">
              <div className="relative w-100 h-100">
                <img src="/transFlashLogo.gif" alt="Soul Woven Rising Xpressions logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Adorn Your Soul.{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">
              Wear the Story.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Handcrafted jewelry and fiber art rooted in healing, heritage, and self-expression. Each thread holds intention. Every piece tells your story.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
            >
              Explore the Collection
            </a>
            <a
              href="#community"
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-950 font-bold rounded-full transition-all duration-300"
            >
              Create With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero