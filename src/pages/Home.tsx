import Hero from '../components/Hero'
import ProjectTypes from '../components/ProjectTypes'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectsCarousel from '../components/ProjectsCarousel'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectTypes />
      <WhyChooseUs />
      <ProjectsCarousel />
      <Footer />
    </div>
  )
}
