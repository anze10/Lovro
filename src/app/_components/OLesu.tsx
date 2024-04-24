import Link from "next/link"
import { Input } from "@mantine/core"
import { Textarea } from "@mantine/core"
import { Button } from "@mantine/core"

export default function Component() {
    return (

        <main className="flex-1">
            <section >
                <div className="container px-4 md:px-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">O Lesu</h1>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Hardwood Flooring"
                                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                                height={400}
                                src="/les.jpg"
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
                            <div className="absolute inset-0 bg-black/50 p-6 transition-all duration-300 group-hover:bg-black/0">
                                <h3 className="text-2xl font-bold text-white">Vrste Lesa</h3>
                                <p className="mt-2 text-white"></p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Laminate Flooring"
                                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                                height={400}
                                src="/tehnlogije.jpg"
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
                            <div className="absolute inset-0 bg-black/50 p-6 transition-all duration-300 group-hover:bg-black/0">
                                <h3 className="text-2xl font-bold text-white">Tehnologije obdelave lesa</h3>
                                <p className="mt-2 text-white"></p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Tile Flooring"
                                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                                height={400}
                                src="/vlaga.jpg"
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
                            <div className="absolute inset-0 bg-black/50 p-6 transition-all duration-300 group-hover:bg-black/0">
                                <h3 className="text-2xl font-bold text-white">Sušenje in vlaženje lesa</h3>
                                <p className="mt-2 text-white"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}