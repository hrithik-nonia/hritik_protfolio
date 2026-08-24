import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
import Languages from "../components/Languages";
import Skils from "../components/Skils";
import Education from "../components/Education";
import About from "../components/About";
import Projects from "../components/Project";

function HomePage() {
  return (
    <>
      <section>
        {/* hero section */}
        <section>
          <HeroSection />
        </section>

        {/* information area */}
        <section>
          {/* about me */}
          <section>
            <About />
          </section>

          {/* my skils */}
          <section>
            <Skils />
          </section>

          {/* projects */}
          <section>
            <Projects />
          </section>

          {/* education */}
          <section>
            <Education />
          </section>

          {/* language */}
          <section>
            <Languages />
          </section>

          {/* contect */}
          <section>
            <Contact />
          </section>
        </section>
      </section>
    </>
  );
}
export default HomePage;
