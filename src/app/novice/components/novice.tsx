'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@mui/material"
import { FaPhone, FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaBars, FaTimes, FaCalendarAlt } from 'react-icons/fa'

export default function Novice() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'O NAS', href: '/onas' },
    { name: 'STORITVE', href: '/storitve' },
    { name: 'REFERENCE', href: '/reference' },
    { name: 'NOVICE', href: '/novice' },
    { name: 'KONTAKT', href: '/kontakt' },
  ]

  const newsArticles = [
    {
      title: 'Novi trendi v parketarstvu za leto 2023',
      excerpt: 'Odkrijte najnovejše trende v svetu parketa in lesenih talnih oblog za leto 2023. Od naravnih tonov do inovativnih vzorcev, predstavljamo vam, kaj bo v trendu v prihajajočem letu.',
      date: '2023-05-15',
      image: '/placeholder.svg?height=200&width=300&text=Trendi+2023',
      slug: 'novi-trendi-v-parketarstvu-2023'
    },
    {
      title: 'Pravilno vzdrževanje parketa v poletnih mesecih',
      excerpt: 'Poletje prinaša posebne izzive za vaš parket. V tem članku vam predstavljamo nasvete za ohranjanje lepote vašega parketa med vročimi poletnimi dnevi.',
      date: '2023-06-01',
      image: '/placeholder.svg?height=200&width=300&text=Vzdrževanje+Poleti',
      slug: 'vzdrzevanje-parketa-poleti'
    },
    {
      title: 'Zaključen projekt: Obnova parketa v Narodnem muzeju',
      excerpt: 'Ponosni smo, da smo uspešno zaključili obsežen projekt obnove parketa v prestižnem Narodnem muzeju. Preberite več o izzivih in rešitvah pri tem pomembnem projektu.',
      date: '2023-04-20',
      image: '/placeholder.svg?height=200&width=300&text=Projekt+Narodni+Muzej',
      slug: 'obnova-parketa-narodni-muzej'
    },
    {
      title: 'Kako izbrati pravi parket za vaš dom?',
      excerpt: 'Izbira pravega parketa lahko bistveno vpliva na videz in udobje vašega doma. V tem vodniku vam predstavljamo ključne dejavnike, ki jih morate upoštevati pri izbiri parketa.',
      date: '2023-03-10',
      image: '/placeholder.svg?height=200&width=300&text=Izbira+Parketa',
      slug: 'kako-izbrati-pravi-parket'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-800 text-white shadow-sm relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/C1_LOGOTIP RAVBAR_vodoraven_ no 01.png" alt="Ravbar Parketarstvo Logo" className="h-16"/>
          </Link>
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent shadow-md md:shadow-none z-50`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-4 md:p-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white hover:text-[#6CA748] block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out border-2 border-transparent hover:border-[#6CA748]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative bg-gray-800 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=1200&text=Novice+Background"
              alt="Novice Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6">Novice in članki</h1>
            <p className="text-2xl mb-10">Ostanite na tekočem z najnovejšimi trendi in informacijami iz sveta parketarstva</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        {new Date(article.date).toLocaleDateString('sl-SI')}
                      </span>
                      <Link href={`/novice/${article.slug}`} className="text-[#6CA748] hover:underline">
                        Preberi več
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ne zamudite novih člankov</h2>
            <p className="text-xl mb-8">Prijavite se na naše e-novice in bodite vedno na tekočem</p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Vnesite vaš e-poštni naslov" 
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#6CA748]"
                />
                <Button variant="contained" style={{ backgroundColor: '#6CA748', color: 'white' }} className="rounded-r-md">
                  Prijava
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="font-bold">Parketarstvo Ravbar</h3>
              <p>K Roku 139</p>
              <p>8000, Novo Mesto</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
              <img src="/C1_LOGOTIP RAVBAR_vodoraven_ no 01.png?height=80&width=120&text=RAVBAR" alt="Ravbar Parketarstvo Logo" className="h-20" />
            </div>
            <div className="w-full md:w-1/3 text-right">
              <p><a href="tel:041726602" className="hover:text-[#6CA748]"><FaPhone className="inline mr-2" />041 726 602</a></p>
              <p><a href="mailto:info@parket-ravbar.com" className="hover:text-[#6CA748]"><FaEnvelope className="inline mr-2" />info@parket-ravbar.com</a></p>
              <p><a href="https://www.facebook.com/parketarstvoravbar" target="_blank" rel="noopener noreferrer" className="hover:text-[#6CA748]"><FaFacebookF className="inline mr-2" />Facebook</a></p>
              <p><a href="#" className="hover:text-[#6CA748]"><FaMapMarkerAlt className="inline mr-2" />Prikaži zemljevid</a></p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold mb-4">LES JE NARAVEN, PUSTIMO DA TAK TUDI OSTANE</p>
          </div>
          <div className="mt-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} parket-ravbar.com | <Link href="/piskotki" className="hover:underline">Piškotki</Link></p>
            <p className="mt-2">Lovro Ravbar</p>
          </div>
        </div>
      </footer>
    </div>
  )
}