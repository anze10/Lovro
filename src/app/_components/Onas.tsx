import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col justify-center items-center ">
            <section className="w-full py-12 md:py-24 lg:py-32 border-y">
                <div className="container grid items-start gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 lg:items-center mx-auto">
                    <div className="flex flex-col items-start space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">O nas</h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Parketarstvo Ravbar, z več kot 25 let izkušenj, zagotavlja vrhunske storitve parketarstva po vsej Sloveniji. Smo edino podjetje v Dolenjski regiji, ki uporablja napredne Trio® brusilne stroje, znane po izjemni kakovosti brušenja. Naša predanost kakovosti se odraža v natančnem svetovanju, zanesljivosti rokov, prilagodljivosti za želje strank ter uporabi tehnologij za dolgotrajno kondicijo lesa.
                        </p>
                        <Link
                            className="inline-flex h-10 items-center rounded-md border border-gray-200 bg-gray-100 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-200 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="#"
                        >
                            Izvedi več
                        </Link>
                    </div>
                    <img
                        alt="public/test_slika_1.jpg"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        height="310"
                        src="/test_slika_1.jpg"
                        width="550"
                    />
                </div>
            </section>
        </div>
    )
}

