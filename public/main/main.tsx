// 'use client'

// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger
// } from '@radix-ui/react-dropdown-menu'
// import { MessageCircle } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { AiOutlinePhone } from 'react-icons/ai'
// import { IoMenu } from 'react-icons/io5'
// import { Carousel } from 'react-responsive-carousel'

// import caMosh from '../../../public/mosh.jpg'
// import caLovia from '../../../public/slaydLovia.jpg'
// import caYongoq from '../../../public/slaydYongoq.jpg'
// import caNoxot from '../../../public/slaydNoxot.jpg'
// import downloadIcon from '../../../public/downloadIcon.png'
// import LogoNav from '../../../public/logoWhite.png'
// import messageIcon from '../../../public/messegeIcon.png'
// import callIcon from '../../../public/call icon.png'

// import { usePathname ,useRouter} from 'next/navigation'
// import { useTranslation } from 'react-i18next'

// function Main () {
//   const [isOpen, setIsOpen] = React.useState(false)
//   const [isOpenMenu, setIsOpenMenu] = React.useState(false)

//   const { i18n } = useTranslation()
//   const currentLocale = i18n.language
//   const router = useRouter()
//   const currentPathname = usePathname()

//   const { t } = useTranslation()

//   const handleLanguageChange = React.useCallback(
//     async (newLocale: string) => {
//       document.cookie = `NEXT_LOCALE=${newLocale};expires=${new Date(
//         Date.now() + 30 * 24 * 60 * 60 * 1000
//       ).toUTCString()};path=/`

//       const newPathname = currentPathname.replace(
//         `/${currentLocale}`,
//         `/${newLocale}`
//       )
//       console.log(i18n.language)

//       await i18n.changeLanguage(newLocale)
//       router.replace(newPathname)
//       router.refresh()
//     },
//     [currentLocale, currentPathname, router, i18n]
//   )

//   const toTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   const openPdf = () => {
//     // Replace the URL below with the actual URL of your PDF file
//     const pdfUrl = '/website.pdf'
//     window.open(pdfUrl, '_blank') // Opens the PDF in a new tab
//   }

//   return (
//     <div className='w-full'>
//       <div className='relative w-full h-[100vh] overflow-hidden'>
//         {/* Carousel Background */}
//         <Carousel
//           // autoPlay={false}
//           autoPlay
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           // className='absolute top-0 left-0 w-full h-full'
//         >
//           <div className='w-full relative h-[100vh]'>
//             <Image
              
//               src={caMosh}
//               alt='Mosh'
//               className='w-full h-full object-cover'
//             />
//             <p className='absolute text-2xl f-medium-24 sm:text-5xl text-white py-10 sm:text-start sm:p-9 sm:left-14 bottom-40 w-full sm:bottom-11 z-10'>
//               {t('txt_nohot')}
//             </p>
//           </div>
//           <div className='w-full relative h-[100vh]'>
//             <Image
              
//               src={caYongoq}
//               alt='Yongoq'
//               className='w-full h-full object-cover'
//             />
//             <p className='absolute text-2xl f-medium-24 sm:text-5xl text-white py-10 sm:text-start sm:p-9 sm:left-14 bottom-40 w-full sm:bottom-11 z-10'>
//               {t('txt_yongoq')}
//             </p>
//           </div>
//           <div className='w-full relative h-[100vh]'>
//             <Image
              
//               src={caLovia}
//               alt='Lovia'
//               className='w-full h-full object-cover'
//             />
//             <p className='absolute text-2xl f-medium-24 sm:text-5xl text-white py-10 sm:text-start sm:p-9 sm:left-14 bottom-40 w-full sm:bottom-11 z-10'>
//               {' '}
//               {t('txt_lovia')}
//             </p>
//           </div>
//           <div className='w-full h-[100vh]'>
//             <Image
              
//               src={caNoxot}
//               alt='Noxot'
//               className='w-full h-full object-cover'
//             />
//             <p className='absolute text-2xl f-medium-24 sm:text-5xl text-white py-10 sm:text-start sm:p-9 sm:left-14 bottom-40 w-full sm:bottom-11 z-10'>
//               {t('txt_yong')}{' '}
//             </p>
//           </div>
//         </Carousel>

//         {/* Foreground Content */}
//         <div className='relative flex flex-col justify-between h-screen pb-10 z-10'>
//           {/* Navigation */}
//           <div className='flex w-full items-center mt-14 justify-between px-6 sm:px-24  text-white'>
//             <div className='flex-shrink-0'>
//               <Image
                
//                 onClick={() => toTop()}
//                 className='w-auto h-8 sm:h-12 hover:cursor-pointer'
//                 src={LogoNav}
//                 alt='Logo'
//               />
//             </div>
//             <div className='hidden w-full sm:ml-10 sm:flex space-x-4 text-xl md:flex justify-between items-center px-10'>
//               <div className='f-medium-27 hover:cursor-pointer'>
//                 {t('main')}
//               </div>
//               <div className='f-medium-27 hover:cursor-pointer'>
//                 {t('about')}
//               </div>
//               <div className='f-medium-27 hover:cursor-pointer'>
//                 <Link className=' hover:cursor-pointer' href='/products'>
//                   {t('catalog')}
//                 </Link>
//               </div>
//               <div className='flex gap-1 f-medium-24 text-xl items-center hover:cursor-pointer'>
//                 <Image
                  
//                   height={20}
//                   src={callIcon}
//                   alt='callIcon'
//                 />
//                 {/* <BsTelephone size={19} className='hover:cursor-pointer' />{' '} */}
//                 +998(95)-089-99-44{' '}
//               </div>
//               <div className='flex gap-1 f-medium-24 text-xl items-center hover:cursor-pointer'>
//                 <Image
                  
//                   height={20}
//                   src={messageIcon}
//                   alt='message'
//                 />
//                 {/* <MessageCircle size={19} className='hover:cursor-pointer' /> */}
//                 albois200@mail.ru{' '}
//               </div>
//             </div>
//             <div className='flex gap-1'>
//               {/* Language Dropdown */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <button
//                     className='w-16 sm:text-base'
//                     onClick={() => setIsOpen(!isOpen)}
//                   >
//                     RU / EN
//                   </button>
//                 </DropdownMenuTrigger>
//                 {isOpen && ( // Show dropdown content if menu is open
//                   <DropdownMenuContent className='w-auto bg-green-500'>
//                     <div className='flex flex-col space-y-4 text-xl'>
//                       <DropdownMenuCheckboxItem
//                         onClick={() => handleLanguageChange('ru')}
//                         className='px-4 py-1 hover:cursor-pointer'
//                       >
//                         RUS
//                       </DropdownMenuCheckboxItem>
//                       <DropdownMenuCheckboxItem
//                         onClick={() => handleLanguageChange('en')}
//                         className='px-4 py-1 hover:cursor-pointer'
//                       >
//                         ENG
//                       </DropdownMenuCheckboxItem>
//                     </div>
//                   </DropdownMenuContent>
//                 )}
//               </DropdownMenu>
//               {/* menu */}
//               <div className='sm:hidden'>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <IoMenu
//                       color='white'
//                       size={36}
//                       onClick={() => setIsOpenMenu(!isOpenMenu)}
//                     />
//                   </DropdownMenuTrigger>
//                   {isOpenMenu && ( // Show dropdown content if menu is open
//                     <DropdownMenuContent className='w-auto bg-green-500'>
//                       <div className='flex flex-col space-y-4'>
//                         <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
//                           {t('main')}
//                         </div>
//                         <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
//                           {t('about')}
//                         </div>
//                         <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
//                           <Link
//                             className=' hover:cursor-pointer'
//                             href='/products'
//                           >
//                             {t('catalog')}
//                           </Link>
//                         </div>
//                         <div className='flex gap-1 w-full px-2 items-center hover:cursor-pointer'>
//                           +998(95)-089-99-44{' '}
//                           <AiOutlinePhone
//                             size={18}
//                             className='hover:cursor-pointer'
//                           />{' '}
//                         </div>
//                         <div className='flex gap-1 items-center sm:hidden px-4 py-2 hover:cursor-pointer'>
//                           albois200@mail.ru{' '}
//                           <MessageCircle
//                             size={22}
//                             className='hover:cursor-pointer'
//                           />
//                         </div>
//                       </div>
//                     </DropdownMenuContent>
//                   )}
//                 </DropdownMenu>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className='flex flex-col text-white md:flex-row justify-between items-center px-6 sm:px-24 mt-12'>
//             <div className='text-center md:text-left mb-3'>
//               <p className='text-2xl f-medium-24 sm:text-5xl '>
//                 {/* {t('main_bob')} */}&nbsp;
//               </p>
//               <span className='font-semibold text-sm sm:text-2xl'>
//                 {t('about_mi')}
//               </span>
//             </div>
//             <div className='mt-6 md:mt-0 flex items-center rounded bg-opacity-10 mb-3'>
//               <div
//                 onClick={openPdf}
//                 className='flex items-center w-auto sm:w-96 sm:-mx-60 gap-4 px-2 py-2 rounded-full bg-white bg-opacity-40 sm:rounded-l-full'
//               >
//                 <div className='rounded-full bg-green-800 bg-opacity-90 p-4'>
//                   <Image
                    
//                     src={downloadIcon}
//                     className='h-22 w-5'
//                     alt='download'
//                   />
//                 </div>
//                 <div className='text-base sm:text-2xl font-semibold'>
//                   {t('download_catalog')}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Main
