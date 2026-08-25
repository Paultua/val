import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyVal from '@/components/WhyVal';
import Expertise from '@/components/Expertise';
import Regions from '@/components/Regions';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <WhyVal />
        <Expertise />
        <Regions />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
