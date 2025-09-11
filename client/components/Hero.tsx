export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-dbo-dark via-dbo-medium to-dbo-dark min-h-[800px] lg:min-h-[1104px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/3e8c8aebfc219a623184271fd9ae8bb485bf07da?width=3390"
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-white font-bold leading-[110%] tracking-tight mb-8">
            <span className="block text-4xl lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.6px]">
              A credit score for your building's sustainability.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/55 font-medium text-lg lg:text-2xl lg:leading-[35px] lg:tracking-[-0.12px] max-w-3xl mx-auto mb-12">
            Design, Build, and Operate with confidence. Save energy and money.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-white text-dbo-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
