import Hero from '../components/Hero'
import ProjectTypes from '../components/ProjectTypes'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectsCarousel from '../components/ProjectsCarousel'

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectTypes />
      <WhyChooseUs />
      <ProjectsCarousel />
    </div>
  )
}
