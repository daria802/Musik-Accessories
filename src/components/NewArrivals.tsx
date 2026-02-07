import { Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Les Paul Standard',
    brand: 'Gibson',
    price: 2799,
    image: 'https://images.unsplash.com/photo-1635468324924-8d53dd3f8c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaWJzb24lMjBMZXMlMjBQYXVsJTIwZ3VpdGFyJTIwc3R1ZGlvfGVufDF8fHx8MTc2OTg5MDU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Prophet-5 Synthesizer',
    brand: 'Sequential',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1634041551278-a843c116ff28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwa2V5Ym9hcmQlMjBzeW50aGVzaXplcnxlbnwxfHx8fDE3Njk4OTA1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'SQ Series Kit',
    brand: 'DW Drums',
    price: 4299,
    image: 'https://images.unsplash.com/photo-1641264024622-fbc1abeb6075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVtJTIwa2l0JTIwc3R1ZGlvfGVufDF8fHx8MTc2OTg5MDU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'HD28 Acoustic',
    brand: 'Martin',
    price: 3599,
    image: 'https://images.unsplash.com/photo-1605020419755-ac3fd07926c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGd1aXRhciUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTA1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function NewArrivals() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20">
      <h2 className="text-4xl mb-12">Latest Additions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 group"
          >
            <div className="aspect-square overflow-hidden bg-white/5">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 space-y-2">
              <p className="text-xs text-white/50 uppercase tracking-wider">{product.brand}</p>
              <h3 className="text-lg">{product.title}</h3>
              <div className="flex items-center justify-between pt-2">
                <p className="text-[#FFD700]">${product.price.toLocaleString()}</p>
                <button className="w-8 h-8 rounded-full bg-[#FFD700] text-[#0A0A0A] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
