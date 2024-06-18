import Link from "next/link"
export default function Component() {
    return (
        <div className="flex flex-col justify-center items-center">

            <main className="flex-1">

                <section className="w-full py-12">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Raziščite naše novice</h2>
                                <p className="mt-4 text-gray-500 dark:text-gray-400">
                                    Ustanite s trendi in nasveti za nego tal, ki jih ponujamo v naših novicah
                                </p>
                                <div className="mt-8 grid gap-4">
                                    <Link
                                        className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray:bg-gray-950 dark:hover:bg-gray-800"
                                        href="#"
                                    >
                                        <img
                                            alt="Blog Post 1"
                                            className="h-20 w-20 rounded-lg object-cover"
                                            height={80}
                                            src="/haro.jpg"
                                            style={{
                                                aspectRatio: "80/80",
                                                objectFit: "cover",
                                            }}
                                            width={80}
                                        />
                                        <div>
                                            <h3 className="text-lg font-medium group-hover:underline">
                                                Haro Disano
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                V kolikor razmišljate o novi talni oblogi in želite v svoj dom vnesti pridih pristne narave je HARO parket prava izbira za vas.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link
                                        className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray:bg-gray-950 dark:hover:bg-gray-800"
                                        href="#"
                                    >
                                        <img
                                            alt="Blog Post 2"
                                            className="h-20 w-20 rounded-lg object-cover"
                                            height={80}
                                            src="/168.jpg"
                                            style={{
                                                aspectRatio: "80/80",
                                                objectFit: "cover",
                                            }}
                                            width={80}
                                        />
                                        <div>
                                            <h3 className="text-lg font-medium group-hover:underline">
                                                Si še posebej želite toplega videza lesa?
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Iščete bivalno zdravo talno oblogo brez PVC-ja in mehčal, ki je preprosta za nego in vzdržljivo?
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </div>
    )
}

// export default function Component() {
//     return (
//         <div className="flex flex-col ">

//             <main className="flex-1">

//                 <section className="w-full py-12   ">
//                     <div className="container px-4 md:px-6">
//                         <div className="grid gap-8">
//                             <div>
//                                 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Raziščite naše novice</h2>
//                                 <p className="mt-4 text-gray-500 dark:text-gray-400">
//                                     Ustanite s trendi in nasveti za nego tal, ki jih ponujamo v naših novicah
//                                 </p>
//                                 <div className="mt-8 grid gap-4">
//                                     <Link
//                                         className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray:bg-gray-950 dark:hover:bg-gray-800"
//                                         href="#"
//                                     >
//                                         <img
//                                             alt="Blog Post 1"
//                                             className="h-20 w-20 rounded-lg object-cover"
//                                             height={80}
//                                             src="/haro.jpg"
//                                             style={{
//                                                 aspectRatio: "80/80",
//                                                 objectFit: "cover",
//                                             }}
//                                             width={80}
//                                         />
//                                         <div>
//                                             <h3 className="text-lg font-medium group-hover:underline">
//                                                 Haro Disano
//                                             </h3>
//                                             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                                                 V kolikor razmišljate o novi talni oblogi in želite v svoj dom vnesti pridih pristne narave je HARO parket prava izbira za vas.
//                                             </p>
//                                         </div>
//                                     </Link>
//                                     <Link
//                                         className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray:bg-gray-950 dark:hover:bg-gray-800"
//                                         href="#"
//                                     >
//                                         <img
//                                             alt="Blog Post 2"
//                                             className="h-20 w-20 rounded-lg object-cover"
//                                             height={80}
//                                             src="/168.jpg"
//                                             style={{
//                                                 aspectRatio: "80/80",
//                                                 objectFit: "cover",
//                                             }}
//                                             width={80}
//                                         />
//                                         <div>
//                                             <h3 className="text-lg font-medium group-hover:underline">
//                                                 Si še posebej želite toplega videza lesa?
//                                             </h3>
//                                             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                                                 Iščete bivalno zdravo talno oblogo brez PVC-ja in mehčal, ki je preprosta za nego in vzdržljivo?
//                                             </p>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//             </main>

//         </div>
//     )
// }

