"use client"
import { CanvasRevealEffect } from '@/components/background/CanvasRevealEffect';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import StackTimeline from '@/components/timeline/StackTimeline';
import Logos from '@/components/sections/layouts/footer/Logos';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';

const mockGalleryItems = [
  { title: "Landscape 1", image: "/images/placeholderwide1.jpg" },
  { title: "Portrait 1", image: "/images/placeholderwide2.jpg" },
  { title: "Landscape 2", image: "/images/placeholderwide3.jpg" },
  { title: "Portrait 2", image: "/images/placeholderwide4.jpg" },
];

const Home = () => {
  return (
    <div>
      <section id="hero" className="relative bg-[url('/images/forest.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
        <CanvasRevealEffect colors={[[0, 230, 255], [120, 0, 255]]} opacities={[1, 0]} totalSize={100} dotSize={3} shader="url('/images/logo.svg')" center={["x", "y"]} />
        <CyclopsHero title="NebulaFrames Photography" subtitle="Capturing moments in a futuristic light" primaryButtonText="Explore More" secondaryButtonText="Contact Us" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} onMenuClick={() => {}} onContactClick={() => {}}/>
      </section>
      <section id="about" className="bg-[#0A0F1A] text-white py-16">
        <MinimalAbout description="I'm a passionate photographer focused on capturing the beauty of the cosmos through earthbound lenses."/>
      </section>
      <section id="portfolio" className="bg-soft-noise">
        <GalleryBento items={mockGalleryItems} className="max-w-7xl mx-auto" gridClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" />
      </section>
      <section id="process" className="bg-gradient-to-r from-[#00e6ff] to-[#ff007a] text-white py-16">
        <StackTimeline items={[{ id: 1, title: 'Concept', description: 'The initial idea and drafting.', image: '/images/placeholder1.avif' }, { id: 2, title: 'Shoot', description: 'Capturing the moment.', image: '/images/placeholder2.avif' }, { id: 3, title: 'Deliver', description: 'Final editing and delivery.', image: '/images/placeholder3.avif' }]} className="container mx-auto" />
      </section>
      <section id="testimonials" className="bg-[#0A0F1A] text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-8">What our clients say</h2>
        <p className="text-lg text-gray-400">"Absolutely phenomenal service! Totally exceeded my expectations." - John Doe</p>
      </section>
      <section id="contact" className="bg-glass py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded" required />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border border-gray-300 rounded" required></textarea>
          <button type="submit" className="w-full py-3 bg-[#00E6FF] text-white rounded">Send Message</button>
        </form>
      </section>
      <footer className="bg-[#0A0F1A] py-4">
        <SimpleFooter columns={[{ title: 'Social', items: [{ label: 'Instagram', onClick: () => {} }, { label: 'Facebook', onClick: () => {} }] }]} copyrightText="© 2023 NebulaFrames Photography" onPrivacyClick={() => {}} />
      </footer>
    </div>
  );
};

export default Home;
