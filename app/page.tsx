import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyVal from '@/components/WhyVal';
import Expertise from '@/components/Expertise';
import Regions from '@/components/Regions';
import Properties from '@/components/Properties';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />

        <AnimatedSection>
          <WhyVal />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Expertise />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Regions />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Properties />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Process />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <FAQ />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Contact />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
