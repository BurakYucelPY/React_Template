import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    name: 'İncek Orion Tower',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'Merkez Ofis',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    name: 'Gölbaşı Ticari',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  },
  {
    id: 4,
    name: 'Villa Nova',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 5,
    name: 'Özel 2 Villa Konut',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80'
  },
  {
    id: 6,
    name: 'Residence Complex',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
]

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getCarouselItems = () => {
    const items = []
    const total = projects.length
    
    // Show 5 items: 2 left, center, 2 right
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total
      items.push({
        ...projects[index],
        position: i
      })
    }
    return items
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % projects.length
    )
  }

  const goToIndex = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const carouselItems = getCarouselItems()

  return (
    <div className="bg-gray-900 py-24 sm:py-32 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-50" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl lg:max-w-4xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Projelerimiz
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Başarıyla tamamladığımız projelerimizi keşfedin
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative h-96 flex items-center justify-center" 
          style={{ perspective: '1200px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Navigation Buttons */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/80 text-white backdrop-blur-sm transition-all hover:bg-gray-700/80 hover:scale-110"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(55, 65, 81, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/80 text-white backdrop-blur-sm transition-all hover:bg-gray-700/80 hover:scale-110"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(55, 65, 81, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </motion.button>

          {/* 3D Carousel */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {carouselItems.map((item) => {
                const position = item.position
                let transform = ''
                let zIndex = 10 - Math.abs(position)
                let opacity = 1
                let scale = 1
                let blur = 0

                if (position === 0) {
                  // Center item - clear and prominent
                  transform = 'translateX(0) rotateY(0deg) translateZ(0px)'
                  scale = 1
                  opacity = 1
                  blur = 0
                } else if (position === -1) {
                  // Left item - slightly rotated and blurred
                  transform = 'translateX(-200px) rotateY(25deg) translateZ(-150px)'
                  scale = 0.85
                  opacity = 0.8
                  blur = 1
                } else if (position === 1) {
                  // Right item - slightly rotated and blurred
                  transform = 'translateX(200px) rotateY(-25deg) translateZ(-150px)'
                  scale = 0.85
                  opacity = 0.8
                  blur = 1
                } else if (position === -2) {
                  // Far left item - more rotated and blurred
                  transform = 'translateX(-350px) rotateY(45deg) translateZ(-300px)'
                  scale = 0.7
                  opacity = 0.6
                  blur = 2
                } else if (position === 2) {
                  // Far right item - more rotated and blurred
                  transform = 'translateX(350px) rotateY(-45deg) translateZ(-300px)'
                  scale = 0.7
                  opacity = 0.6
                  blur = 2
                }

                return (
                  <motion.div
                    key={`${item.id}-${position}`}
                    className="absolute cursor-pointer"
                    style={{
                      transform: `${transform} scale(${scale})`,
                      zIndex,
                      opacity,
                      transformStyle: 'preserve-3d',
                      filter: `blur(${blur}px)`
                    }}
                    initial={{ opacity: 0, scale: 0.8, rotateY: position * 45 }}
                    animate={{ 
                      opacity: opacity, 
                      scale: scale, 
                      rotateY: position * 25,
                      x: position === 0 ? 0 : position * 200,
                      z: position === 0 ? 0 : -Math.abs(position) * 150
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }}
                    whileHover={{ 
                      scale: position === 0 ? 1.05 : scale * 1.1,
                      filter: `blur(${Math.max(0, blur - 1)}px)`,
                      transition: { duration: 0.2 }
                    }}
                    onClick={() => {
                      if (position !== 0) {
                        if (position > 0) {
                          goToNext()
                        } else {
                          goToPrevious()
                        }
                      }
                    }}
                  >
                    <div className="w-96 h-72 relative overflow-hidden rounded-xl bg-gray-800 shadow-2xl">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="text-xl font-semibold text-white text-center">
                          {item.name}
                        </h3>
                      </motion.div>
                      {position === 0 && (
                        <motion.div 
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Öne Çıkan
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div 
          className="mt-12 flex justify-center space-x-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-indigo-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
