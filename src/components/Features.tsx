import { motion } from 'framer-motion'
import { HomeIcon, BuildingOfficeIcon, BuildingStorefrontIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Konut Projeleri',
    description:
      'Modern yaşam alanları tasarlıyoruz. Ailelerin ihtiyaçlarına uygun, konforlu ve güvenli konut projeleri ile hayalinizdeki eve kavuşun.',
    icon: HomeIcon,
  },
  {
    name: 'Villa Projeleri',
    description:
      'Lüks ve özel villa projelerimizle yaşam standartlarınızı yükseltin. Özel tasarım, kaliteli malzeme ve mükemmel işçilik garantisi.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Toplu Yaşam Alanları',
    description:
      'Sosyal yaşamı destekleyen, yeşil alanları bol, modern toplu konut projeleri. Komşuluk ilişkilerini güçlendiren tasarımlar.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Ticari Projeler',
    description:
      'İş dünyasının ihtiyaçlarına yönelik ofis, plaza ve ticari merkez projeleri. Yatırımınızın değerini artıran stratejik konumlar.',
    icon: BuildingStorefrontIcon,
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

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base/7 font-semibold text-indigo-400">Kaliteli İnşaat</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Hayalinizdeki Projeleri Gerçeğe Dönüştürüyoruz
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            20 yılı aşkın deneyimimizle, modern mimari anlayışı ve kaliteli malzeme kullanımı ile 
            yaşam alanlarınızı inşa ediyoruz. Güvenilir, sürdürülebilir ve estetik projeler.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="relative pl-16"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#" 
            className="text-sm/6 font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more <span aria-hidden="true">→</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
