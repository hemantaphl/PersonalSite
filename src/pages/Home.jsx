import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader/Preloader";
import SEO from "../components/SEO";
import HeroSection from "../components/Sections/HeroSection";
import BlogSection from "../components/Sections/BlogSection";
import ProjectsSection from "../components/Sections/ProjectsSection";

export default function Home() {
  return (
    <div className="pt-0 min-h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-100">
      <Preloader />
      <SEO />
      <Navbar />

  <main className="flex-grow">
  <HeroSection />
  <ProjectsSection />
  <BlogSection />
</main>
      <Footer />
    </div>
  );
}
