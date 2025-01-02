'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@mui/material"
import { FaPhone, FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'

export default function ONas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'O NAS', href: '/onas' },
    { name: 'STORITVE', href: '/storitve' },
    { name: 'REFERENCE', href: '/reference' },
    { name: 'NOVICE', href: '/novice' },
    { name: 'KONTAKT', href: '/kontakt' },
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
              src="/parketar.jpg?height=400&width=1200&text=O+Nas+Background"
              alt="O Nas Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6">O nas</h1>
            <p className="text-2xl mb-10">Spoznajte zgodbo Parketarstva Ravbar</p>
          </div>
        </section>

        <section id="naša-zgodba" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Naša zgodba</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img src="/slikaena.jpg?height=400&width=600&text=Naša+Zgodba" alt="Naša Zgodba" className="rounded-lg shadow-md w-full h-auto" />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 mb-4">
                  Parketarstvo Ravbar je družinsko podjetje z bogato tradicijo, ki sega več kot dve desetletji v preteklost. Naša zgodba se je začela leta 1998, ko je ustanovitelj Matej Ravbar prepoznal potrebo po visokokakovostnih parketarskih storitvah v regiji.
                </p>
                <p className="text-gray-600 mb-4">
                  Skozi leta smo rastli, se razvijali in pridobivali dragocene izkušnje. Naša strast do lesa in predanost kakovosti sta nas vodili pri vsakem projektu, ne glede na njegovo velikost ali zahtevnost.
                </p>
                <p className="text-gray-600">
                  Danes smo ponosni, da lahko rečemo, da smo vodilni ponudnik parketarskih storitev v naši regiji, z ekipo strokovnjakov, ki združujejo tradicionalne tehnike z najnovejšimi tehnologijami.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="naša-ekipa" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Naša ekipa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Matej Ravbar', role: 'Ustanovitelj in vodja', image: '/matejko.png?height=300&width=300&text=Matej' },
                { name: 'Andrej Gorenc', role: 'Vodja montaže', image: '/placeholder.svg?height=300&width=300&text=Andrej' },
                { name: 'Lovro Ravbar', role: 'Višji parketar', image: '/placeholder.svg?height=300&width=300&text=Lovro' },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="naša-vizija" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Naša vizija</h2>
            <div className="bg-[#6CA748] text-white p-8 rounded-lg shadow-xl">
              <p className="text-xl leading-relaxed text-center">
                Naša vizija je postati sinonim za vrhunsko kakovost in inovativnost v parketarstvu. Želimo ustvarjati prostore, ki navdihujejo in bogatijo življenja ljudi, hkrati pa ohranjati naravno lepoto lesa za prihodnje generacije.
              </p>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-4">Naše vrednote</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Kakovost brez kompromisov</li>
                <li>Spoštovanje do narave in trajnostni pristop</li>
                <li>Inovativnost in nenehno izpopolnjevanje</li>
                <li>Zadovoljstvo strank na prvem mestu</li>
                <li>Timsko delo in medsebojno spoštovanje</li>
              </ul>
            </div>
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