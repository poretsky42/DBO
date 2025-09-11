export default function Features() {
  return (
    <section className="bg-dbo-light-bg py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Row 1: Design. Build. Operate. */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          {/* Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight tracking-tight mb-6">
              Design. Build. Operate.
            </h2>
            <p className="text-lg text-black/55 font-medium leading-relaxed mb-12">
              A rating system that dynamically updates as your property ages. Project into the future and make the right investments.
            </p>
            <button className="bg-dbo-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-dbo-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
          
          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-2xl">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/db54e9820767059626a809fa816c2d000ca19a74?width=410"
                alt="DBO Rating System"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Everything and everyone you need */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          {/* Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight tracking-tight mb-6">
              Everything and everyone you need, all in one place
            </h2>
            <p className="text-lg text-black/55 font-medium leading-relaxed">
              The DBO digital marketplace leverages DBO scores for every resource and partner to bring you a streamlined, centralized experience when purchasing and hiring for your next project. Easily grasp the impact — financial and environmental — of every piece of your construction puzzle. Find the right materials, team, financing, and insurance, all in one place. Save time, save effort, and save money as we help you save the planet.
            </p>
          </div>
          
          {/* Image */}
          <div className="flex-1">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/8bdb123131239c362d74a1ec6517ce79aba30f1d?width=1080"
              alt="DBO Marketplace"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
