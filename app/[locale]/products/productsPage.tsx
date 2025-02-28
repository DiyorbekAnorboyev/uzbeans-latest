'use client'
import Image from 'next/image'
import React from 'react'
// import logo from '../../../public/logoWhite.png' // Image import
import logoBlack from '../../../public/logoLast.png'

import noxotSmall from '../../../public/moshPro.jpg'
import mosh1 from '../../../public/mosh1Pro.jpg'
import mosh2 from '../../../public/mosh2Pro.jpg'
import mosh3 from '../../../public/mosh3Pro.jpg'
import lovia1 from '../../../public/lovia1Pro.jpg'
import lovia2 from '../../../public/lovia2Pro.jpg'
import lovia3 from '../../../public/lovia3Pro.jpg'

// import callIcon from '../../../public/call icon.png'

// import { FaGlobe, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import OneProductCard from './oneProductCard'
import { useTranslation } from 'react-i18next'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu'
// import { Button } from '@/components/ui/button'
// import { usePathname, useRouter } from 'next/navigation'
import { InstagramIcon, MessageCircle, YoutubeIcon } from 'lucide-react'
import { LiaTelegramPlane } from 'react-icons/lia'

const ProductsPage = () => {
  // const currentPathname = usePathname()
  // const { i18n } = useTranslation()
  // const currentLocale = i18n.language
  // const router = useRouter()

  // const handleLanguageChange = React.useCallback(
  //   async (newLocale: string) => {
  //     document.cookie = `NEXT_LOCALE=${newLocale};expires=${new Date(
  //       Date.now() + 30 * 24 * 60 * 60 * 1000
  //     ).toUTCString()};path=/`

  //     const newPathname = currentPathname.replace(
  //       `/${currentLocale}`,
  //       `/${newLocale}`
  //     )
  //     console.log(i18n.language)

  //     await i18n.changeLanguage(newLocale)
  //     router.replace(newPathname)
  //     router.refresh()
  //   },
  //   [currentLocale, currentPathname, router, i18n]
  // )

  const data = [
    {
      title: 'Uncolored sortex unpolished',
      img: noxotSmall,
      size: '+2.8 mm',
      purity: '97% - 99% Min',
      moisture: '7%/11%/12%/16% Max',
      package: ' 25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Uncolored sortex unpolished',
      img: mosh1,
      size: '+3 mm',
      purity: '97% - 99% Min',
      moisture: 'max 24%',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Uncolored sortex unpolished',
      img: mosh2,
      size: '+3.5 mm',
      purity: '97% - 99% Min',
      moisture: '7%/11%/12%/16% Max',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Uncolored sortex unpolished',
      img: mosh3,
      size: '+4 mm',
      purity: '97% - 99% Min',
      moisture: '7%/11%/12%/16% Max',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Purple speckled kidney beans',
      img: lovia1,
      size: ' 180-220 pieces in 100 grams',
      color: 'Purple speckled',
      purity: '97% - 99% Min',
      moisture: 'max 14%',
      admixtures: 'max 1%',
      imperfect: 'max 2%',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Black eyed kidney beans',
      img: lovia2,
      size: '340-360 pieces in 100 grams',
      color: 'Creamy white',
      purity: '97% - 99% Min',
      moisture: 'max 14%',
      admixtures: 'max 1%',
      imperfect: 'max 2%',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Light speckled kidney beans ',
      img: lovia3,
      size: '180-220 pieces in 100 grams',
      color: 'Light speckled',
      purity: '97% - 99% Min',
      moisture: 'max 14%',
      admixtures: 'max 1%',
      imperfect: 'max 2%',
      package: '25-50 kg PP bags according to buyers requirement'
    }
  ]

  console.log(data[0].img)
  const { t } = useTranslation()

  return (
    <div className='px-4 top-16 sm:top-20 absolute sm:px-8 lg:px-20 py-16 flex flex-col h-full w-full justify-between white_Bg_Products'>
      <div className='w-full flex items-center justify-center'>
        <div className='text-green-600 text-3xl sm:text-5xl lg:text-6xl font-bold text-center leading-snug'>
          {t('txt_mung')}
        </div>
      </div>

      {/* <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>RU / EN</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuRadioItem
              onClick={() => handleLanguageChange('ru')}
              value='top'
            >
              RUS
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              onClick={() => handleLanguageChange('en')}
              value='bottom'
            >
              ENG
            </DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}

      {/* Product Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
        {data.map((e, idx) => (
          <OneProductCard
            key={idx}
            img={e.img}
            title={e.title}
            size={e.size}
            color={e.color}
            purity={e.purity}
            moisture={e.moisture}
            admixtures={e.admixtures}
            imperfect={e.imperfect}
            packageCard={e.package}
          />
        ))}
        {/* <OneProductCard img={logoBlack} />
        <OneProductCard img={logo} />
        <OneProductCard img={logo} />
        <OneProductCard img={logoBlack} />
        <OneProductCard img={logo} />
        <OneProductCard img={logo} />
        <OneProductCard img={logoBlack} />
        <OneProductCard img={logo} /> */}
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-center w-full pt-16 text-black space-y-4 sm:space-y-0'>
        <div className='w-full sm:w-1/4 flex justify-center sm:justify-start'>
          <Image
            className='w-auto h-8 sm:h-10 lg:h-12'
            src={logoBlack}
            alt='logo'
          />
        </div>

        <div className='w-full flex flex-col sm:flex-row sm:justify-end justify-between items-center  sm:w-3/4 space-y-4 sm:space-y-0 sm:pl-8'>
          <div className='flex justify-center md:justify-start py-2 sm:py-5 gap-6 items-center'>
            <a href='https://www.instagram.com/uzbeans/' target='_blank'>
              <InstagramIcon className='hover:cursor-pointer' />{' '}
            </a>
            <a href='https://t.me/Uzbeans' className='text-2xl md:text-3xl' target='_blank'>
              <LiaTelegramPlane className='hover:cursor-pointer' />{' '}
            </a>
            <a
              href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzCMcrSVRCCgGjWnwtTwrtwDgqCDgVRdGpBgkKFwLvPnNTJLwcLrZggfjrwtFHqQvXPpNGV'
              target='_blank'
            >
              <MessageCircle className='hover:cursor-pointer' />
            </a>
            <p className='text-xl md:text-3xl'>uzbeans</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
