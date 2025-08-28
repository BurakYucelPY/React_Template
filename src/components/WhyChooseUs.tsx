import { WrenchScrewdriverIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from 'framer-motion'

const advantages = [
  {
    name: 'Kaliteli Malzeme',
    description: 'En yüksek kalitede malzemeler kullanarak projelerinizi güvenle inşa ediyoruz. Dayanıklı ve uzun ömürlü yapılar için premium ürünler tercih ediyoruz.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Güvenli İnşaat',
    description: 'İş güvenliği standartlarına tam uyum sağlayarak, güvenli ve risk-free inşaat süreçleri yürütüyoruz. Müşteri ve çalışan güvenliği önceliğimizdir.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Zamanında Teslim',
    description: 'Projelerinizi söz verdiğimiz tarihte teslim ediyoruz. Profesyonel ekip ve etkin planlama ile zamanında tamamlanan projeler garantisi veriyoruz.',
    icon: ClockIcon,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function WhyChooseUs() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* Background Image with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/pexels-mike-van-schoonderwalt-1884800-5505119.jpg')`,
          y
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-48 sm:py-64 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Neden Bizi Tercih Etmelisiniz?
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              20 yılı aşkın deneyimimizle, kaliteli malzeme, güvenli inşaat ve zamanında teslim 
              garantisi ile hayalinizdeki projeleri gerçeğe dönüştürüyoruz.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {advantages.map((advantage) => (
                <motion.div 
                  key={advantage.name} 
                  className="flex flex-col bg-black/20 backdrop-blur-sm rounded-lg p-6"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <advantage.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {advantage.name}
                  </dt>
                  <dd className="flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{advantage.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
