import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d6118c6b174911c925a84bf9e359a68e3155d16f?width=2800"
          alt="Grass background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-r from-dbo-dark via-dbo-medium to-dbo-dark bg-opacity-90 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          {/* Headline */}
          <h2 className="text-white font-bold text-4xl lg:text-6xl leading-tight tracking-tight mb-6">
            Get on the list
          </h2>

          {/* Subtitle */}
          <p className="text-white/55 font-medium text-lg lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
            Join our list and be the first to hear about product updates.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-white text-dbo-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative bg-gradient-to-r from-dbo-dark via-dbo-medium to-dbo-dark border-t border-white/15">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-8">
          <div className="flex justify-between items-center">
            <p className="text-white font-semibold text-lg lg:text-2xl">
              © 2024 DBO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
