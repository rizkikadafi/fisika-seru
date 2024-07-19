import Navbar from '@/app/ui/home/navbar';
import Hero from '@/app/ui/home/hero';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="mt-20 md:mt-0">
        <section id="hero" className="">
          <Hero />
        </section>
      </div>
    </main>
  );
}
