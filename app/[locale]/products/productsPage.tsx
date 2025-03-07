'use client'
import Image from 'next/image'
import React from 'react'
import logoBlack from '../../../public/logoLast.webp'

import noxotSmall from '../../../public/moshPro.webp'
import mosh1 from '../../../public/mosh1Pro.webp'
import mosh2 from '../../../public/mosh2Pro.webp'
import mosh3 from '../../../public/mosh3Pro.webp'
import lovia1 from '../../../public/lovia1Pro.webp'
import lovia2 from '../../../public/lovia2Pro.jpg'
import lovia3 from '../../../public/lovia3Pro.webp'

import instaIcon from '../../../public/green-insta.png'
import tgIcon from '../../../public/green-tg.png'
import whatsappIcon from "../../../public/greenWatsap.png"
import weChatIcon from "../../../public/green-wechat.png"
import messageIcon from '../../../public/green-sms.png'
import background2 from '../../../public/background-02.webp'
import OneProductCard from './oneProductCard'
import { useTranslation } from 'react-i18next'

const ProductsPage = () => {
  const data = [
    {
      title: 'Green Mung Bean',
      img: noxotSmall,
      size: '+2.8 mm',
      purity: '97% - 99% Min',
      moisture: '7%/11%/12%/16% Max',
      package: ' 25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Green Mung Bean',
      img: mosh1,
      size: '+3 mm',
      purity: '97% - 99% Min',
      moisture: 'max 24%',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Green Mung Bean',
      img: mosh2,
      size: '+3.5 mm',
      purity: '97% - 99% Min',
      moisture: '7%/11%/12%/16% Max',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'Green Mung Bean',
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

  const { t } = useTranslation()

  return (
    <div className='px-4 sm:top-20 sm:relative sm:px-8 lg:px-20 py-16 flex flex-col h-full w-full justify-between white_Bg_Products'>
      <Image
        priority
        src={background2}
        alt='Background'
        fill
        style={{ objectFit: 'cover' }}
        className='-z-10'
      />
      <div className='w-full mt-20 sm:mt-0 flex items-center justify-center'>
        <div className='text-green-600 text-3xl sm:text-5xl lg:text-6xl font-bold text-center leading-snug'>
          {t('txt_mung')}
        </div>
      </div>

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
              <Image
                height={31}
                width={31}
                src={instaIcon}
                alt='Instagram'
                className='hover:cursor-pointer'
              />
            </a>
            <a
              href='https://t.me/Uzbeans'
              className='text-2xl md:text-3xl'
              target='_blank'
            >
              <Image
                height={31}
                width={31}
                src={tgIcon}
                alt='Telegram'
                className='hover:cursor-pointer'
              />
            </a>
            <a
              href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzCMcrSVRCCgGjWnwtTwrtwDgqCDgVRdGpBgkKFwLvPnNTJLwcLrZggfjrwtFHqQvXPpNGV'
              target='_blank'
            >
              <Image
                height={31}
                width={31}
                src={messageIcon}
                alt='Message'
                className='hover:cursor-pointer'
              />
            </a>
            <a href='https://wa.me/998950899944' target='_blank'>
              <Image
                height={31}
                width={31}
                src={whatsappIcon}
                alt='Whatsapp'
                className='hover:cursor-pointer'
              />
            </a>
            <a href='https://t.me/Uzbeans' target='_blank'>
              <Image
                height={31}
                width={31}
                src={weChatIcon}
                alt='WeChat'
                className='hover:cursor-pointer'
              />
            </a>
            <p className='text-xl md:text-3xl beans-green'>uzbeans</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
