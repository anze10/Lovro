/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Lxk7A4zevJo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
    return (
        <div >
            <section className="relative w-full h-screen bg-[url('/test_slika_0.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white space-y-6 max-w-3xl px-4 md:px-0">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Zanesljivo pod vašimi nogami </h1>
                        <p className="text-lg md:text-xl">Parketarstvo Ravbar z vami že od leta 1996</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* <Link
                                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                href="#"
                            >
                                Shop Flooring
                            </Link> */}
                            <Link
                                className="inline-flex items-center justify-center rounded-md border border-white px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                href="#"
                            >
                                Kontakt
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}