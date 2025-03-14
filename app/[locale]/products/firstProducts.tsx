'use client'
import Image from 'next/image'
import React from 'react'

import LogoNav from '../../../public/logoWhite.webp'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useTranslation } from 'react-i18next'
import { IoMenu } from 'react-icons/io5'
import { usePathname, useRouter } from 'next/navigation'
import messageIcon from '../../../public/messegeIcon.png'
import callIcon from '../../../public/call icon.webp'

const FirstProductPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLanguageChange = React.useCallback(
    async (newLocale: string) => {
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toUTCString()};path=/`

      const newPathname = currentPathname.replace(
        `/${currentLocale}`,
        `/${newLocale}`
      )
      console.log(i18n.language)

      await i18n.changeLanguage(newLocale)
      router.replace(newPathname)
      router.refresh()
    },
    [currentLocale, currentPathname, router, i18n]
  )

  const { t } = useTranslation()

  return (
    <div className='flex fixed z-10 w-full items-center py-7 justify-between px-6 lg:px-24 bg-green-600 text-white'>
      <div className='flex-shrink-0'>
        <Link className=' hover:cursor-pointer' href='/'>
          <Image
            onClick={() => toTop()}
            className='w-auto h-8 sm:h-12 hover:cursor-pointer'
            src={LogoNav}
            alt='Logo'
          />
        </Link>
      </div>
      <div className='hidden w-full sm:ml-10 sm:flex space-x-4 text-xl md:flex justify-between items-center px-10'>
        <div className='hover:cursor-pointer'>{t('main')}</div>
        <div className='hover:cursor-pointer'>{t('about')}</div>
        <div className='hover:cursor-pointer'>
          <Link className=' hover:cursor-pointer' href='/products'>
            {t('catalog')}
          </Link>
        </div>
        <div className='flex gap-1 text-lg items-center hover:cursor-pointer'>
          {/* <BsTelephone size={19} className='hover:cursor-pointer' />{' '} */}
          <Image
                    loading='lazy'
                    height={20}
                    src={callIcon}
                    alt='callIcon'
                  />
          +998(95)-089-99-44{' '}
        </div>
        <div className='flex gap-1 text-lg items-center hover:cursor-pointer'>
          {/* <MessageCircle size={19} className='hover:cursor-pointer' /> */}
          <Image
                    loading='lazy'
                    height={20}
                    src={messageIcon}
                    alt='message'
                  />
          albois200@mail.ru{' '}
        </div>
      </div>
      <div className='flex gap-1'>
        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className='w-16 max-sm:text-sm'
              onClick={() => setIsOpen(!isOpen)}
            >
              RU / EN
            </button>
          </DropdownMenuTrigger>
          {isOpen && ( // Show dropdown content if menu is open
            <DropdownMenuContent className='w-auto absolute z-20 bg-green-500'>
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
                    <Link className=' hover:cursor-pointer' href='/products'>
                      {t('catalog')}
                    </Link>
                  </div>
                  <div className='flex gap-1 w-full px-2 items-center hover:cursor-pointer'>
                    +998(95)-089-99-44{' '}
                    <Image
                    loading='lazy'
                    height={20}
                    src={callIcon}
                    alt='callIcon'
                  />
                  </div>
                  <div className='flex gap-1 items-center sm:hidden px-4 py-2 hover:cursor-pointer'>
                    albois200@mail.ru{' '}
                    <Image
                    loading='lazy'
                    height={20}
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
  )
}

export default FirstProductPage
