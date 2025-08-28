import { motion } from 'framer-motion'
import { HomeIcon, BuildingOfficeIcon, BuildingStorefrontIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const projectTypes = [
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

export default function ProjectTypes() {
  return (
    <div id="project-types" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Title and description */}
          <motion.div 
            className="lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-base/7 font-semibold text-indigo-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Kaliteli İnşaat
            </motion.h2>
            <motion.p 
              className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hayalinizdeki Projeleri Gerçeğe Dönüştürüyoruz
            </motion.p>
            <motion.p 
              className="mt-6 text-lg/8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              20 yılı aşkın deneyimimizle, modern mimari anlayışı ve kaliteli malzeme kullanımı ile 
              yaşam alanlarınızı inşa ediyoruz. Her projemizde sizin hayalinizi gerçeğe dönüştürmek için 
              çalışıyoruz. Güvenilir, sürdürülebilir ve estetik projeler ile ailenizin geleceğini 
              güvenle inşa ediyoruz. Kaliteli malzeme, uzman ekip ve mükemmel işçilik garantisi ile 
              sizin için en iyisini yapıyoruz. Müşteri memnuniyeti odaklı yaklaşımımız ve 
              şeffaf iletişim anlayışımız ile her adımda yanınızdayız.
            </motion.p>
          </motion.div>

          {/* Right side - Project types */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <dl className="space-y-8">
              {projectTypes.map((projectType) => (
                <motion.div 
                  key={projectType.name} 
                  className="relative pl-16"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                      <projectType.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {projectType.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-400">{projectType.description}</dd>
                </motion.div>
              ))}
            </dl>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/completed" 
                className="text-sm/6 font-semibold text-white hover:text-indigo-400 transition-colors duration-200"
              >
                Daha Fazla Gör <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
