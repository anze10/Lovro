'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@mui/material"
import { FaPhone, FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'

export default function Storitve() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'O NAS', href: '/onas' },
    { name: 'STORITVE', href: '/storitve' },
    { name: 'REFERENCE', href: '/reference' },
    { name: 'NOVICE', href: '/novice' },
    { name: 'KONTAKT', href: '/kontakt' },
  ]

  const services = [
    { 
      title: 'Polaganje parketa', 
      description: 'Strokovno polaganje vseh vrst parketa, vključno z masivnim, večslojnim in laminatnim parketom.',
      image: '/polaganje.png?height=300&width=400&text=Polaganje+Parketa'
    },
    { 
      title: 'Brušenje parketa', 
      description: 'Obnova in osvežitev obstoječega parketa s profesionalnim brušenjem in glajanjem.',
      image: '/placeholder.svg?height=300&width=400&text=Brušenje+Parketa'
    },
    { 
      title: 'Lakiranje parketa', 
      description: 'Zaščita in izboljšanje videza parketa z visokokakovostnimi laki in olji.',
      image: '/placeholder.svg?height=300&width=400&text=Lakiranje+Parketa'
    },
    { 
      title: 'Oljenje parketa', 
      description: 'Naravna zaščita in nega parketa z uporabo vrhunskih olj za les.',
      image: '/placeholder.svg?height=300&width=400&text=Oljenje+Parketa'
    },
    { 
      title: 'Obnova starega parketa', 
      description: 'Celovita obnova in restavracija starejših parketnih površin.',
      image: '/placeholder.svg?height=300&width=400&text=Obnova+Parketa'
    },
    { 
      title: 'Vzdrževanje parketa', 
      description: 'Redni pregledi in vzdrževalna dela za dolgotrajno ohranjanje kakovosti parketa.',
      image: '/vzdrzevanje.png?height=300&width=400&text=Vzdrževanje+Parketa'
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
              src="/slikaena.jpg?height=400&width=1200&text=Storitve+Background"
              alt="Storitve Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6">Naše storitve</h1>
            <p className="text-2xl mb-10">Celovite rešitve za vaš parket</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Kaj ponujamo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Zakaj izbrati nas?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Izkušnje in strokovnost</h3>
                <p className="text-gray-600">Z več kot 20-letnimi izkušnjami v parketarstvu zagotavljamo vrhunsko kakovost in strokovno izvedbo vseh storitev.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Sodobna tehnologija</h3>
                <p className="text-gray-600">Uporabljamo najnovejšo opremo in tehnike za učinkovito in kakovostno delo na vašem parketu.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Prilagodljivost</h3>
                <p className="text-gray-600">Naše storitve prilagajamo vašim specifičnim potrebam in željam za optimalne rezultate.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Garancija kakovosti</h3>
                <p className="text-gray-600">Za vse naše storitve nudimo garancijo, kar odraža našo zavezanost h kakovosti in zadovoljstvu strank.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Potrebujete naše storitve?</h2>
            <p className="text-xl mb-8">Kontaktirajte nas za brezplačen ogled in ponudbo</p>
            <a href="kontakt">
            <Button variant="contained" style={{ backgroundColor: '#6CA748', color: 'white' }}>
              Kontaktirajte nas
            </Button>
            </a>
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