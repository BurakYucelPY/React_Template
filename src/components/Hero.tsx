import { motion, useScroll, useTransform } from 'framer-motion'
import ProjectTypes from './ProjectTypes'
import Features from './Features'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const scrollToProjectTypes = () => {
    const projectTypesElement = document.getElementById('project-types')
    if (projectTypesElement) {
      const headerHeight = 80
      const elementTop = projectTypesElement.offsetTop - headerHeight
      
      // Daha yavaş ve etkileyici scroll
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      })
      
      // Scroll tamamlandıktan sonra hafif bir bounce efekti
      setTimeout(() => {
        projectTypesElement.style.transform = 'scale(1.02)'
        setTimeout(() => {
          projectTypesElement.style.transform = 'scale(1)'
        }, 200)
      }, 1000)
    }
  }

  return (
    <>
      <div className="bg-gray-900 relative overflow-hidden">
        {/* Background Image with parallax animation */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/pexels-crab-lens-179881567-20020483.jpg')`,
            y
          }}
        />
        {/* Content overlay */}
        <div className="relative z-10">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <motion.h1 
                  className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  GROFT İnşaat ile Geleceği İnşa Ediyoruz
                </motion.h1>
                <motion.p 
                  className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Türkiye'nin önde gelen inşaat firmalarından biri olarak, yenilikçi tasarım anlayışı ve 
                  mükemmel işçilik ile yaşam alanları yaratıyoruz. Kalite ve güvenilirlik odaklı yaklaşımımızla 
                  projelerinizi hayata geçiriyoruz.
                </motion.p>
                <motion.div 
                  className="mt-10 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    onClick={scrollToProjectTypes}
                    className="rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                      y: -2
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      y: 0
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    Başlayalım
                  </motion.button>
                </motion.div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
              />
            </div>
          </div>
        </div>
      </div>
      <ProjectTypes />
      <Features />
    </>
  )
}
