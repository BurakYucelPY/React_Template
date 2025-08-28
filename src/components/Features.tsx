import { WrenchScrewdriverIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
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

export default function Features() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div 
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('/pexels-mike-van-schoonderwalt-1884800-5505119.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              20 yılı aşkın deneyimimizle, kaliteli malzeme, güvenli inşaat ve zamanında teslim 
              garantisi ile hayalinizdeki projeleri gerçeğe dönüştürüyoruz.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href="#" className="text-sm font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                        Detayları Gör →
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
