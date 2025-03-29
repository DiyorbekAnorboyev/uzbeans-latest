import Image from 'next/image'
import React, { useState } from 'react'

import caMosh from '../../public/mosh.jpg'
import caLovia from '../../public/slaydLovia.jpg'
import caYongoq from '../../public/slaydYongoq.jpg'
import caNoxot from '../../public/slaydNoxot.jpg'
import { useTranslation } from 'react-i18next'

const  Carusel = React.memo((image, title) => {
  const { t } = useTranslation()
  const images = [caMosh, caYongoq, caLovia, caNoxot]
  const textData = ['txt_nohot', 'txt_yongoq', 'txt_lovia', 'txt_yong']

  const [currentIndex, setCurrentIndex] = useState(1)

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

//   React.useEffect(() => {
//     const interval = setInterval(nextSlide, 3000)
//     return () => clearInterval(interval)
//   }, [])

  return (
    <div className='absolute top-0 left-0 w-full h-full'>
      <div className=' w-full h-[100] carousel-slide'>
        <Image
          loading='lazy'
          className='w-full h-full object-cover'
          src={caMosh}
          alt='Mosh'
        />
        <p className='absolute text-2xl f-medium-24 sm:text-5xl text-white py-10 sm:text-start sm:p-9 sm:left-14 bottom-40 w-full sm:bottom-14 z-10'>
          {t('txt_nohot')}
        </p>
      </div>
      <div className='w-full relative h-[100vh]'>
        <Image
          loading='lazy'
          className='w-full h-full object-cover'
          src={caYongoq}
          alt='Yongoq'
        />
        <p className='absolute text-2xl f-medium-24 sm:text-5xl text-white py-10 sm:text-start sm:p-9 sm:left-14 bottom-40 w-full sm:bottom-14 z-10'>
          {t('txt_yongoq')}
        </p>
      </div>
      <div className='w-full relative h-[100vh]'>
        <Image
          loading='lazy'
          className='w-full h-full object-cover'
          src={caLovia}
          alt='Lovia'
        />
        <p className='absolute text-2xl f-medium-24 sm:text-5xl text-white py-10 sm:text-start sm:p-9 sm:left-14 bottom-40 w-full sm:bottom-14 z-10'>
          {' '}
          {t('txt_lovia')}
        </p>
      </div>
      <div className='w-full h-[100vh]'>
        <Image
          loading='lazy'
          className='w-full h-full object-cover'
          src={caNoxot}
          alt='Noxot'
        />
        <p className='absolute text-2xl f-medium-24 sm:text-5xl text-white py-10 sm:text-start sm:p-9 sm:left-14 bottom-40 w-full sm:bottom-14 z-10'>
          {t('txt_yong')}
          {''}
        </p>
      </div>
    </div>
  )
}) 

export default Carusel
