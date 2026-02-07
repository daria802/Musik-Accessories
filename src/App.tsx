import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewArrivals } from './components/NewArrivals';
import { OurLegacy } from './components/OurLegacy';
import { SignatureSeries } from './components/SignatureSeries';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <NewArrivals />
        <OurLegacy />
        <SignatureSeries />
      </main>
      <Footer />
    </div>
  );
}
