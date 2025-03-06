'use client'
import Image from 'next/image'
import LogoNav from '../../public/logoWhite.webp'
import LogoNav1 from '../../public/logoLast.webp'
import traktorImg from '../../public/traktor.jpg' //
import beansImg from '../../public/new-beans.webp'
import downloadIcon from '../../public/downloadIcon.png' //
import noxot from '../../public/noxot.webp'
import yangoq from '../../public/yangoq.jpg' //
import mosh1 from '../../public/mosh1.jpg'
import lovia from '../../public/lovia.webp'

import background1 from '../../public/background-01.webp'
import background2 from '../../public/background-02.webp'
import background3 from '../../public/background-03.webp'
import instaIcon from '../../public/insta-oq.png'
import tgIcon from '../../public/tg-oq.png'

import * as React from 'react'
import '../globals.css'

import caMosh from '../../public/mosh.jpg' //
import caLovia from '../../public/slaydLovia.jpg'
import caYongoq from '../../public/slaydYongoq.jpg'
import caNoxot from '../../public/slaydNoxot.jpg'
import messageIcon from '../../public/messegeIcon.png'
import callIcon from '../../public/call icon.webp'
import locationIcon from '../../public/locationIcon.png'
import { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IoMenu } from 'react-icons/io5'

import { GoMoveToTop } from 'react-icons/go'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { usePathname, useRouter } from 'next/navigation'

export default function Home () {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const handleLanguageChange = React.useCallback(
    async (newLocale: string) => {
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toUTCString()};path=/`

      const newPathname = currentPathname.replace(
        `/${currentLocale}`,
        `/${newLocale}`
      )

      await i18n.changeLanguage(newLocale)
      router.replace(newPathname)
      router.refresh()
    },
    [currentLocale, currentPathname, router, i18n]
  )

  const [displaySize, setDisplaySize] = React.useState(0)

  // React.useEffect(() => {
  //   const handleResize = () => {
  //     setDisplaySize(window.innerWidth)
  //   }
  //   window.addEventListener('resize', handleResize)
  //   handleResize()
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  React.useEffect(() => {
    const listener = () => console.log('Event')
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [])

  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { t } = useTranslation()

  const openPdf = () => {
    const pdfUrl = '/website.pdf'
    window.open(pdfUrl, '_blank')
  }

  return (
    <div className='text-white'>
      {isVisible && (
        <div className='fixed bottom-10 right-8 z-10'>
          <div
            onClick={toTop}
            className='p-2 bg-green-900 bg-opacity-50 rounded-full'
          >
            <GoMoveToTop className='h-12 w-12 hover:cursor-pointer max-sm:h-10 max-sm:w-10' />
          </div>
        </div>
      )}
      {/* main */}
      <div className='w-full'>
        <div className='relative w-full h-[100vh] overflow-hidden'>
          {/* Carousel Background */}
          <Carousel
            // autoPlay={false}
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className='absolute top-0 left-0 w-full h-full'
          >
            <div className='w-full relative h-[100vh]'>
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
          </Carousel>

          {/* Foreground Content */}
          <div className='relative flex flex-col justify-between h-screen pb-10 z-10'>
            {/* Navigation */}
            <div className='flex w-full items-center mt-14 justify-between px-6 sm:px-24  text-white'>
              <div className='flex-shrink-0'>
                <Image
                  onClick={() => toTop()}
                  priority
                  className='h-8 sm:h-12 w-auto'
                  src={LogoNav}
                  alt='Logo'
                />
              </div>
              <div className='hidden w-full sm:ml-10 sm:flex space-x-4 text-xl md:flex justify-between items-center px-10'>
                <div className='f-medium-27 hover:cursor-pointer'>
                  {t('main')}
                </div>
                <div className='f-medium-27 hover:cursor-pointer'>
                  {t('about')}
                </div>
                <div className='f-medium-27 hover:cursor-pointer'>
                  <Link className=' hover:cursor-pointer' href='/products'>
                    {t('catalog')}
                  </Link>
                </div>
                <div className='flex gap-1 f-medium-24 text-xl items-center hover:cursor-pointer'>
                  <Image
                    priority
                    height={20}
                    width={20}
                    src={callIcon}
                    alt='callIcon'
                  />
                  {/* <BsTelephone size={19} className='hover:cursor-pointer' />{' '} */}
                  +998(95)-089-99-44{' '}
                </div>
                <div className='flex gap-1 f-medium-24 text-xl items-center hover:cursor-pointer'>
                  <Image
                    priority
                    height={20}
                    width={20}
                    src={messageIcon}
                    alt='message'
                  />
                  {/* <MessageCircle size={19} className='hover:cursor-pointer' /> */}
                  albois200@mail.ru{' '}
                </div>
              </div>
              <div className='flex gap-1'>
                {/* Language Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className='w-16 sm:text-base'
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      RU / EN
                    </button>
                  </DropdownMenuTrigger>
                  {isOpen && ( // Show dropdown content if menu is open
                    <DropdownMenuContent className='w-auto bg-green-500'>
                      <div className='flex flex-col space-y-4 text-xl'>
                        <DropdownMenuCheckboxItem
                          onClick={() => handleLanguageChange('ru')}
                          className='px-4 py-1 hover:cursor-pointer'
                        >
                          RUS
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                          onClick={() => handleLanguageChange('en')}
                          className='px-4 py-1 hover:cursor-pointer'
                        >
                          ENG
                        </DropdownMenuCheckboxItem>
                      </div>
                    </DropdownMenuContent>
                  )}
                </DropdownMenu>
                {/* menu */}
                <div className='sm:hidden'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IoMenu
                        color='white'
                        size={36}
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                      />
                    </DropdownMenuTrigger>
                    {isOpenMenu && ( // Show dropdown content if menu is open
                      <DropdownMenuContent className='w-auto bg-green-500'>
                        <div className='flex flex-col space-y-4'>
                          <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                            {t('main')}
                          </div>
                          <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                            {t('about')}
                          </div>
                          <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                            <Link
                              className=' hover:cursor-pointer'
                              href='/products'
                            >
                              {t('catalog')}
                            </Link>
                          </div>
                          <div className='flex gap-1 w-full px-2 items-center hover:cursor-pointer'>
                            +998(95)-089-99-44{' '}
                            <Image
                              priority
                              width={20}
                              height={20}
                              src={callIcon}
                              alt='message'
                            />
                          </div>
                          <div className='flex gap-1 items-center sm:hidden px-4 py-2 hover:cursor-pointer'>
                            albois200@mail.ru{' '}
                            <Image
                              priority
                              height={20}
                              width={20}
                              src={messageIcon}
                              alt='message'
                            />
                          </div>
                        </div>
                      </DropdownMenuContent>
                    )}
                  </DropdownMenu>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className='flex flex-col text-white md:flex-row justify-between items-center px-6 sm:px-24 mt-12'>
              <div className='text-center md:text-left mb-3'>
                {/* ##### pb-3 */}
                <p className='text-2xl f-medium-24 sm:text-5xl '>
                  {/* {t('main_bob')} */}&nbsp;
                </p>
                <span className='font-medium text-sm sm:text-2xl'>
                  {t('about_mi')}
                </span>
              </div>
              <div className='mt-6 md:mt-0 flex items-center rounded bg-opacity-10 mb-3'>
                <div
                  onClick={openPdf}
                  className='flex items-center w-auto sm:w-96 sm:-mx-60 gap-4 px-2 py-2 rounded-full bg-white bg-opacity-40 sm:rounded-l-full'
                >
                  <div className='rounded-full bg-green-800 bg-opacity-90 p-4'>
                    <Image
                      priority
                      src={downloadIcon}
                      className='h-22 w-5'
                      alt='download'
                    />
                  </div>
                  <div className='text-base sm:text-2xl font-semibold'>
                    {t('download_catalog')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}

      <div className='flex flex-col px-6 md:px-20 about-bg relative w-full h-full bg-top'>
        <Image
          priority
          src={background1}
          alt='Background'
          fill
          style={{ objectFit: 'cover' }}
          className='-z-10 bg-top'
        />

        {/* Title Section */}
        <div className='text-center text-3xl md:text-7xl mt-10 md:mt-20 w-full'>
          <span>{t('title')}</span>
        </div>

        {/* Content Section */}
        <div className='flex flex-col md:flex-row mt-10 md:mt-28 gap-10 md:gap-24 pb-10'>
          {/* Left Column */}
          <div className='w-full sm:relative'>
            <p className='text-2xl sm:text-4xl md:text-5xl'>{t('about_cm')}</p>
            <p className='mt-6 sm:mt-10 text-base sm:text-xl md:text-xl'>
              <span className='font-bold'>{t('welcome_cm')}</span> —{' '}
              {t('txt_moldu')}
              <br />
              <span className='font-bold'>{t('txt_upakov')}</span>
              {t('txt_cozdat')}
            </p>
            <div className='mt-6 sm:mt-10 text-base sm:text-xl md:text-xl'>
              <p>
                <span className='font-bold'>{t('txt_uspexa')}</span> —{' '}
                {t('txt_sochet')}
              </p>
            </div>
            <div className='w-full mt-10 sm:mt-0'>
              <Image
                priority
                className='w-full sm:absolute sm:-bottom-24 bg-cover h-1/2 h-45 z-10'
                src={traktorImg}
                alt='Tractor'
              />
            </div>
          </div>

          {/* Right Column */}
          <div className='w-full'>
            <div>
              <Image
                priority
                // loading='lazy'

                className='w-full'
                src={beansImg}
                alt='Beans'
              />
            </div>
            <div>
              <p className='mt-10 sm:mt-20 text-base sm:text-xl md:text-xl'>
                {t('txt_gordim')} <br /> {t('txt_strem')}{' '}
              </p>
            </div>
            <div className='mt-6 sm:mt-10 text-base sm:text-xl md:text-xl font-bold '>
              {t('txt_uzbeans')}{' '}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className=' sm:pb-80 relative bg-top pb-96'>
        <Image
          priority
          src={background2}
          alt='Background'
          fill
          style={{ objectFit: 'cover' }}
          className='-z-10 bg-top'
        />
        <div className='relative min-h-screen'>
          {/* Title */}
          <div className='pt-20 sm:pt-40'>
            <p className='text-2xl sm:text-3xl md:text-5xl font-semibold sm:py-3 text-center w-full bg-green-900 text-white p-2'>
              {t('txt_products')}{' '}
            </p>
          </div>

          {/* Product Grid */}
          <div className='mt-14 px-6 sm:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full'>
            <div className='lg:col-span-3 bg-slate-400 relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                loading='lazy'
                className='w-full h-full object-cover'
                src={mosh1}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-2xl font-medium px-6 py-5'>
                  {t('txt_nohot')}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-slate-600 lg:col-span-2 relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                loading='lazy'
                className='w-full h-full object-cover'
                src={lovia}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-2xl font-medium px-6 py-5'>
                  {t('txt_lovia')}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='lg:col-span-2 bg-slate-400  relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                loading='lazy'
                className='w-full h-full object-cover'
                src={yangoq}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-2xl font-medium px-6 py-5'>
                  {t('txt_yongoq')}
                </p>
              </div>
            </div>

            {/* Card 4: Takes 2 columns on larger screens */}
            <div className='lg:col-span-3 bg-slate-600 relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                loading='lazy'
                className='w-full h-full object-cover'
                src={noxot}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-2xl font-medium px-6 py-5'>
                  {t('txt_yong')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className=' h-40 w-full flex justify-center items-center'>
          <Link
            className='bg-green-600 hover:cursor-pointer sm:px-10 rounded-full text-lg font-medium sm:text-3xl md:text-1xl p-3 px-5'
            href='/products'
          >
            {t('products')}
          </Link>
        </div>

        {/* map */}
        <div className='h-1/2 absolute w-full sm:-bottom-1/4'>
          {' '}
          <div>
            <p className='mt-10 sm:mt-0 text-3xl md:px-24 md:text-5xl text-green-900 font-semibold text-center md:text-left'>
              {t('location')}{' '}
            </p>
          </div>
          <div className='w-full'>
            <div className='mt-10 '>
              <div>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.599218274142!2d71.23881005105166!3d40.99895597907338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca24dcda79d3b%3A0x1cb1032f9601216!2z0KHRgtGA0LDRgNC40LnQstC10YHRgtCy0L7QvNC40YbQsCDQnNCw0LnRgdC60LDRjywg0JzQsNC50YHQutCw0Y8gMjEg0JAsINCc0LDRgdC60LDRjywg0KLQtdC70YzQvdC40LrQsA!5e0!3m2!1sru!2s!4v1691752214000!5m2!1sru!2s'
                  width='100%'
                  height='500'
                  style={{ border: 'none' }}
                  allowFullScreen={true}
                  loading='lazy'
                  sandbox='allow-scripts allow-same-origin'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Map */}
      <div>
        <div className='h-screen'>
          <div className='bg-green-50-50 relative sm:pb-16'>
            <Image
              priority
              src={background3}
              alt='Background'
              fill
              style={{ objectFit: 'cover' }}
              className='-z-10'
            />
            <div className='h-1/2 w-full '></div>

            <div className='w-full px-6 md:px-20 py-4 sm:py-0 sm:pt-10 bg-black/50 contact-card'>
              <h3 className='font-bold text-2xl md:text-5xl'>
                {t('txt_contacts')}
              </h3>
              <div className='text-lg md:text-xl'>
                <div className='flex flex-col md:flex-row sm:mt-5 justify-between sm:items-end'>
                  <p className='flex w-full sm:w-1/3 sm:justify-between justify-start gap-3 text-base md:text-xl'>
                    +998(95)-089-99-44{' '}
                    <Image
                      priority
                      width={25}
                      height={25}
                      src={callIcon}
                      alt='message'
                    />
                  </p>
                  <p className=' flex w-full gap-2 mt-3 md:mt-0 sm:justify-end text-base md:text-xl'>
                    {t('loc_main')} <br />
                    <Image
                      priority
                      width={25}
                      height={25}
                      src={locationIcon}
                      alt='locationIcon'
                    />
                  </p>
                </div>

                <div className='flex flex-col md:flex-row justify-start sm:justify-between items-center'>
                  <p className='flex w-full sm:w-1/3 sm:justify-between gap-3 text-base md:text-xl'>
                    albois2000@mail.ru{' '}
                    <Image
                      priority
                      height={25}
                      width={25}
                      src={messageIcon}
                      alt='message'
                    />
                  </p>
                  <p className='text-base w-full md:text-xl sm:text-end'>
                    {t('loc_second')} <br />
                  </p>
                </div>
              </div>
              <h4 className='font-bold mt-5 text-2xl md:text-5xl'>
                {t('txt_sotvi')}
              </h4>
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
                <a href='https://t.me/Uzbeans' target='_blank'>
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
                    alt='Telegram'
                    className='hover:cursor-pointer'
                  />
                </a>
                <p className='text-xl md:text-3xl'>uzbeans</p>
              </div>
            </div>

            <div className='flex justify-between items-center px-8 sm:py-10 md:px-20 bg-white py-4'>
              <div className='w-full sm:w-auto '>
                <Image
                  loading='lazy'
                  onClick={() => toTop()}
                  className='h-7 hover:cursor-pointer sm:w-auto md:h-12'
                  src={LogoNav1}
                  alt='logo'
                />
              </div>
              <div className='text-sm sm:w-auto md:text-lg text-green-700 text-right md:text-right'>
                {t('txt_footer')}.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div> </div>
      <div></div>
    </div>
  )
}
