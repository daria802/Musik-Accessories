import { useState } from 'react';
import { Play } from 'lucide-react';

const colorOptions = [
  { name: 'Sunburst', color: '#D4A574', accent: '#D4A574' },
  { name: 'Black', color: '#1A1A1A', accent: '#2A2A2A' },
  { name: 'White', color: '#F5F5F5', accent: '#E0E0E0' },
];

export function SignatureSeries() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20">
      <h2 className="text-4xl mb-12">Signature Series</h2>

      <div
        className="relative rounded-lg overflow-hidden border transition-all duration-500"
        style={{
          borderColor: selectedColor.accent,
          backgroundColor: `${selectedColor.accent}10`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12">
          {/* Left - Product Image */}
          <div className="md:col-span-7">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1637142375182-2c378fcbe061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGd1aXRhciUyMHByb2R1Y3QlMjBibGFjayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5ODkwNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Signature Series Guitar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                Limited Edition
              </p>
              <h3
                className="text-3xl mb-2 transition-colors duration-500"
                style={{ color: selectedColor.accent }}
              >
                Stratocaster Elite
              </h3>
              <p className="text-white/70">
                Hand-finished with premium tonewoods and custom electronics. 
                Only 50 units worldwide.
              </p>
            </div>

            {/* Color Picker */}
            <div className="space-y-3">
              <p className="text-sm text-white/60">Select Finish</p>
              <div className="flex gap-3">
                {colorOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => setSelectedColor(option)}
                    className="group relative"
                    title={option.name}
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                        selectedColor.name === option.name
                          ? 'border-[#FFD700] scale-110'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                      style={{ backgroundColor: option.color }}
                    ></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {option.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sound Preview */}
            <div className="pt-4">
              <button className="flex items-center gap-3 bg-[#FFD700] text-[#0A0A0A] px-6 py-3 rounded-md hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300">
                <Play size={18} fill="currentColor" />
                Sound Preview
              </button>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-2xl text-[#FFD700]">$5,999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
