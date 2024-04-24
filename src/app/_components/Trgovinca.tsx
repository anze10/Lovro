import Link from "next/link"
import { MantineProvider } from "@mantine/core"
import { Input } from "@mantine/core"
import { Textarea } from "@mantine/core"

export default function Component() {
    return (
        <div>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Izdelki za parket</h2>
                        <p className="text-gray-500 max-w-md mx-auto">Privoščite svojemu parketu nekaj dobrega</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    alt="Product 1"
                                    className="object-cover w-full h-full"
                                    height={450}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "600/450",
                                        objectFit: "cover",
                                    }}
                                    width={600}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Na tem delam ko mam izdelke da bom vedu kaj <dt></dt></h3>
                                <p className="text-gray-500 mb-4">Durable and timeless oak flooring for your home.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold text-lg">$7.99/sq ft</span>
                                    <Link
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        href="#"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    alt="Product 2"
                                    className="object-cover w-full h-full"
                                    height={450}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "600/450",
                                        objectFit: "cover",
                                    }}
                                    width={600}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Maple Hardwood Flooring</h3>
                                <p className="text-gray-500 mb-4">Elegant and durable maple flooring for your home.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold text-lg">$8.99/sq ft</span>
                                    <Link
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        href="#"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    alt="Product 3"
                                    className="object-cover w-full h-full"
                                    height={450}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "600/450",
                                        objectFit: "cover",
                                    }}
                                    width={600}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Walnut Hardwood Flooring</h3>
                                <p className="text-gray-500 mb-4">Luxurious and durable walnut flooring for your home.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold text-lg">$9.99/sq ft</span>
                                    <Link
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        href="#"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

