import React from 'react';
import { Button } from './ui/button';
import { Star, Award, Clock } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-red-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-amber-300 rounded-full opacity-20 animate-bounce"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Award className="h-4 w-4 mr-2" />
                Tradición desde 1985
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Los Mejores
                  <span className="block text-red-600">Tamales</span>
                  <span className="block text-orange-600">de México</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
                  Hechos con amor y tradición familiar. Masa suave, rellenos generosos 
                  y el auténtico sabor que has estado buscando.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700 font-medium">100% Artesanal</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Recién Hechos</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={scrollToProducts}
                >
                  Ver Nuestros Tamales
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Nuestra Historia
                </Button>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className="relative">
              {/* Main Tamal Display */}
              <div className="relative z-10 text-center">
                <div className="inline-block relative">
                  {/* Large Tamal Emoji with glow effect */}
                  <div className="text-[20rem] md:text-[25rem] leading-none filter drop-shadow-2xl animate-pulse">
                    🫔
                  </div>
                  
                  {/* Floating elements around the tamal */}
                  <div className="absolute -top-8 -left-8 text-4xl animate-bounce">🌶️</div>
                  <div className="absolute -top-4 -right-12 text-3xl animate-pulse">🌽</div>
                  <div className="absolute -bottom-8 -left-12 text-3xl animate-bounce delay-300">🧄</div>
                  <div className="absolute -bottom-4 -right-8 text-4xl animate-pulse delay-500">🍅</div>
                </div>
              </div>

              {/* Background decorative circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-30 animate-spin-slow"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">39+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">Variedades Deliciosas</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};