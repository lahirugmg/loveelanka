import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutIntro from '@/components/AboutIntro';
import BlogHighlights from '@/components/BlogHighlights';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import InstagramGrid from '@/components/InstagramGrid';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <AboutIntro />
      <BlogHighlights />
      <Testimonials />
      <Newsletter />
      <InstagramGrid />
      <Footer />
    </>
  );
}

