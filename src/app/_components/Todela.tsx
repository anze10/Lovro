'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@mui/material"
import { FaPhone, FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'O NAS', href: '/onas' },
    { name: 'STORITVE', href: '/storitve' },
    { name: 'REFERENCE', href: '/reference' },
    { name: 'NOVICE', href: '/novice' },
    { name: 'KONTAKT', href: '/kontakt' },
  ];

  const services = [
    'Polaganje parketa',
    'Brušenje parketa',
    'Lakiranje parketa',
    'Oljenje parketa',
    'Obnova starega parketa',
    'Vzdrževanje parketa',
  ];

  const references = [
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
  ];

  const news = [
    { title: "Novi trendi v parketarstvu za leto 2023", excerpt: "Odkrijte najnovejše trende v svetu parketa in lesenih talnih oblog za leto 2023.", link: "/novice/trendi-2023" },
    { title: "Pravilno vzdrževanje parketa v poletnih mesecih", excerpt: "Nasveti za ohranjanje lepote vašega parketa med vročimi poletnimi dnevi.", link: "/novice/vzdrzevanje-poleti" },
    { title: "Zaključen projekt: Obnova parketa v Narodnem muzeju", excerpt: "Oglejte si našo najnovejšo obnovo parketa v prestižnem Narodnem muzeju.", link: "/novice/projekt-narodni-muzej" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-800 text-white shadow-sm relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/C1_LOGOTIP RAVBAR_vodoraven_ no 01.png" alt="Ravbar Parketarstvo Logo" className="h-16" />
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
      <section className="relative text-white py-80">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/test_slika_1.jpg"
              alt="Parket Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-55"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl font-bold mb-6">Kakovostno polaganje in obnova parketa</h2>
            <p className="text-2xl mb-10">Z več kot 20 leti izkušenj vam zagotavljamo vrhunske rezultate</p>
            <Button className="bg-[#6CA748] hover:bg-[#5A8E3A] text-white text-lg py-3 px-8">
              Kontaktirajte nas
            </Button>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">O nas</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2 md:order-1">
                <p className="text-gray-600 mb-4">
                  Parketarstvo Ravbar je družinsko podjetje s skoraj 30 let izkušenj v svetu lesenih talnih oblog. Naša strast do lesa in predanost kakovosti sta temelj našega dela, ki ga opravljamo z največjo skrbnostjo in natančnostjo.
                </p>
                <p className="text-gray-600 mb-6">
                  Specializirani smo za polaganje, obnovo in vzdrževanje vseh vrst parketa. Naš tim izkušenih strokovnjakov združuje tradicionalne tehnike z najnovejšimi tehnologijami, kar zagotavlja vrhunske rezultate pri vsakem projektu, ne glede na njegovo velikost ali zahtevnost.
                </p>
                <div className="text-center">
                  <a href="onas">
                  <Button className="bg-[#6CA748] hover:bg-[#5A8E3A] text-white">
                    Izvedi več
                  </Button>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
              <img
                                alt="Tile Flooring"
                                className="h-full w-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                                height={400}
                                src="/parketar.jpg"
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Naše storitve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-center">{service}</h3>
                  <p className="text-gray-600 text-center">Zagotavljamo visoko kakovostno {service.toLowerCase()} z uporabo najboljših materialov in tehnik.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="bg-[#6CA748] text-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-2xl font-semibold text-center leading-relaxed">
                Z vrhunskim svetovanjem, prilagodljivostjo željam strank in strokovnostjo pri delu zagotavljamo rezultate, ki presegajo pričakovanja.
              </p>
            </div>
          </div>
        </section>

        <section id="references" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Naše Reference</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {references.map((reference, index) => (
                <div key={index} className="bg-white px-4 py-2 rounded-full shadow-md text-center">
                  <p className="font-medium">{reference}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-[#6CA748] text-white p-6 rounded-lg text-center">
              <p className="text-lg">
                Poleg tega smo uspešno izvedli projekte v več kot 300 hišah in stanovanjih po Sloveniji in širše.
              </p>
            </div>
          </div>
        </section>

        <section id="news" className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Novice</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {news.map((item, index) => {
        const images = ['/estrihi.jpg', '/vlaga.jpg', '/estrihi2.jpg'];
        const imageSrc = images[index];

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col"
          >
            <img
              src={imageSrc}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{item.excerpt}</p>
              <div className="text-center">
                <Link
                  href={item.link}
                  className="inline-block bg-[#6CA748] text-white py-2 px-4 rounded-md hover:bg-[#5A8E3A] transition-colors duration-300"
                >
                  Preberi več
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


        <section id="contact" className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="bg-[#6CA748] text-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-2xl font-semibold text-center leading-relaxed">
                Zaupajte nam, da vaš dom oživimo s kakovostjo, ki traja.
              </p>
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
              <img src="/C1_LOGOTIP RAVBAR_vodoraven_ no 01.png?height=90&width=120&text=RAVBAR" alt="Ravbar Parketarstvo Logo" className="h-20" />
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