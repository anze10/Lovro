'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@mui/material"
import { FaPhone, FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'

export default function Reference() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'O NAS', href: '/onas' },
    { name: 'STORITVE', href: '/storitve' },
    { name: 'REFERENCE', href: '/reference' },
    { name: 'NOVICE', href: '/novice' },
    { name: 'KONTAKT', href: '/kontakt' },
  ]

  const projects = [
    { 
      title: 'Stanovanjska hiša v Ljubljani', 
      description: 'Polaganje in lakiranje 150m² hrastovega parketa',
      image: '/placeholder.svg?height=300&width=400&text=Projekt+1'
    },
    { 
      title: 'Poslovni prostori v Novem mestu', 
      description: 'Obnova in brušenje 300m² bukovega parketa',
      image: '/placeholder.svg?height=300&width=400&text=Projekt+2'
    },
    { 
      title: 'Hotel v Portorožu', 
      description: 'Polaganje 500m² eksotičnega lesa v hotelskih sobah',
      image: '/placeholder.svg?height=300&width=400&text=Projekt+3'
    },
    { 
      title: 'Športna dvorana v Celju', 
      description: 'Polaganje in lakiranje 1000m² športnega parketa',
      image: '/placeholder.svg?height=300&width=400&text=Projekt+4'
    },
  ]

  const clients = [
    "Okrožno sodišče Novo mesto",
    "Okrožno državno tožilstvo Novo mesto",
    "Okrožno državno tožilstvo v Ljubljani",
    "Okrajno sodišče v Grosupljem",
    "Okrajno sodišče v Kočevju",
    "Okrožno sodišče v Kranju",
    "Dolenjska projektiva Novo mesto",
    "CGP Novo mesto",
    "Ministrstvo za obrambo – Uprava za obrambo Novo mesto",
    "Terme Čatež",
    "Mega d.o.o. Kranj",
    "Lekarna Novak, Novo mesto",
    "Vrtec pedenjped Novo Mesto",
    "Mikrografija d.o.o. Novo Mesto",
    "AS invest d.o.o."
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
              src="/placeholder.svg?height=400&width=1200&text=Reference+Background"
              alt="Reference Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6">Naše reference</h1>
            <p className="text-2xl mb-10">Odkrijte naše uspešne projekte in zadovoljne stranke</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Izbrani projekti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Naše cenjene stranke</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-center text-gray-800">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Želite postati naša naslednja referenca?</h2>
            <p className="text-xl mb-8">Kontaktirajte nas za brezplačen ogled in ponudbo</p>
            <Button variant="contained" style={{ backgroundColor: '#6CA748', color: 'white' }}>
              Kontaktirajte nas
            </Button>
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