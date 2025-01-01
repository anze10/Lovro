'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button, TextField, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { FaPhone, FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

export default function Kontakt() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'O NAS', href: '/onas' },
    { name: 'STORITVE', href: '/storitve' },
    { name: 'REFERENCE', href: '/reference' },
    { name: 'NOVICE', href: '/novice' },
    { name: 'KONTAKT', href: '/kontakt' },
  ]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  const faqItems = [
    { question: "Kakšna je garancija na vaše storitve?", answer: "Na vse naše storitve nudimo 2-letno garancijo. Za specifične izdelke lahko velja daljša garancijska doba proizvajalca." },
    { question: "Koliko časa traja polaganje parketa?", answer: "Čas polaganja je odvisen od velikosti prostora in vrste parketa. V povprečju lahko za stanovanje velikosti 60-80 m² računate na 1-2 dni dela." },
    { question: "Ali izvajate brezplačne oglede?", answer: "Da, za vse večje projekte izvajamo brezplačne oglede na lokaciji. Tako lahko natančno ocenimo obseg dela in pripravimo točno ponudbo." },
    { question: "Katere vrste lesa priporočate za parket?", answer: "Najpogosteje priporočamo hrast, bukev in jesen zaradi njihove trpežnosti in estetike. Izbira je odvisna od vaših preferenc in namembnosti prostora." },
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
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Stopite v stik z nami</h1>
              <p className="text-xl mb-6">Smo tukaj za vsa vaša vprašanja in povpraševanja</p>
              <div className="flex space-x-4">
                <Button variant="contained" style={{ backgroundColor: '#6CA748', color: 'white' }}>
                  Pokličite nas
                </Button>
                <Button variant="outlined" style={{ borderColor: '#6CA748', color: 'white' }}>
                  Pošljite e-pošto
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/telefon.jpg?height=300&width=400&text=Kontakt+Slika" alt="Kontakt" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaPhone className="text-4xl text-[#6CA748] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p><a href="tel:041726602" className="hover:text-[#6CA748]">041 726 602</a></p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaEnvelope className="text-4xl text-[#6CA748] mb-4" />
                <h3 className="text-xl font-semibold mb-2">E-pošta</h3>
                <p><a href="mailto:info@parket-ravbar.com" className="hover:text-[#6CA748]">info@parket-ravbar.com</a></p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaMapMarkerAlt className="text-4xl text-[#6CA748] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Naslov</h3>
                <p>K Roku 139, 8000 Novo Mesto</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Pošljite nam sporočilo</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <TextField
                    fullWidth
                    label="Ime in priimek"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="E-pošta"
                    variant="outlined"
                    type="email"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Telefon"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Sporočilo"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="contained" 
                    style={{ backgroundColor: '#6CA748', color: 'white' }}
                    fullWidth
                  >
                    Pošlji sporočilo
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Pogosta vprašanja</h2>
                {faqItems.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<FaChevronDown />}
                      aria-controls={`panel${index}a-content`}
                      id={`panel${index}a-header`}
                    >
                      <h3 className="text-lg font-semibold">{item.question}</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>{item.answer}</p>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Naša lokacija</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.5721127266766!2d15.1325359!3d45.8080699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764555aa5c5e8f9%3A0x7a3a1e3d2b522d97!2sK%20Roku%20139%2C%208000%20Novo%20mesto!5e0!3m2!1sen!2ssi!4v1653910071744!5m2!1sen!2ssi" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
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