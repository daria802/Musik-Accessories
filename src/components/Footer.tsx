import { Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[#FFD700] uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Press Kit', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[#FFD700] uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              {['Contact', 'Shipping & Returns', 'Warranty', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[#FFD700] uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[#FFD700] uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-white/60">
              Get exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#FFD700] transition-colors duration-300"
              />
              <button className="bg-[#FFD700] text-[#0A0A0A] px-6 py-2 rounded hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 VIBE Audio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
