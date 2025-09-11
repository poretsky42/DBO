export default function FeatureCards() {
  const cards = [
    {
      title: "Design",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bac1dc95cd304dbdf2ce4b212894ef5779dafebf?width=726",
      description:
        "Understand which materials affect which sustainability measures. Plan for the future with the most sensible upgrades at the right times. Source responsibly from the integrated DBO marketplace.",
    },
    {
      title: "Build",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ec2fa3857748615d7efad12104f56cce8f921fce?width=725",
      description:
        "Enlist the help of the most responsible professionals on the market. Ensure best practice when executing high impact renovations. Leverage DBO scores and hire the right talent for a job well done.",
    },
    {
      title: "Operate",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4f2cb92f6adb6f320eee0e7b25502411a9f45918?width=726",
      description:
        "Monitor the performance of your property in real time with dynamic DBO scoring. Back your most important investments with the attention they deserve. Prepare your building for an economically and environmentally sound future.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              {/* Card Image */}
              <div className="mb-8">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-lg text-black/55 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
